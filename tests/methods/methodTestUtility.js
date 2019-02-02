import { assert } from 'chai';
import { join } from 'lodash';
import powerset from 'powerset';
import { enforceString, method, Point } from '../../src';
import { processOutput } from '../../src/methods/variants/helper';
import startCase from '../../src/utility/startCase';

const TEST_METHOD = 'testMethod';
const variantSet = powerset(['get', 'other', 'before', 'set']);
const everyMethodVariant = variantSet.map((combination) => {
	return {
		name: TEST_METHOD + join(combination.map(startCase), ''),
		options: combination
	};
});

export const testMethodType = (settings) => {
	let testBefore = '';
	let testSet = '';
	const testBeforeCallback = function(oldValue) {
		testBefore = processOutput(oldValue, settings.extraProps);
	};
	const testSetCallback = function(newValue) {
		testSet = processOutput(newValue, settings.extraProps);
	};
	const testGetCallback = function() {
		return settings.init;
	};
	const testGetCallbackWithTestItem = function() {
		return settings.true[0];
	};

	const runTests = (TestConstructor, init, testItem, coerce) => {
		everyMethodVariant.forEach((methodData) => {
			const methodName = methodData.name;
			const hasGet = methodData.options.includes('get');
			const hasOther = methodData.options.includes('other');
			const hasBefore = methodData.options.includes('before');
			const hasSet = methodData.options.includes('set');

			describe('(' + methodName.replace('testMethod', '') + ')', () => {
				it('should return the init value', () => {
					const testConstructor = new TestConstructor();

					assert.deepEqual(testConstructor[methodName](), init);
				});

				it('should return "this" after a value is set', () => {
					const testConstructor = new TestConstructor();

					const that = testConstructor[methodName](testItem);

					assert.equal(that, testConstructor);
				});

				if (hasGet) {
					it('should return whatever the "get" callback returns', () => {
						const testConstructor = new TestConstructor();

						testConstructor[methodName](testItem);

						assert.deepEqual(testConstructor[methodName](), init);
					});
				}
				else {
					it('should return a set value', () => {
						const testConstructor = new TestConstructor();

						testConstructor[methodName](testItem);

						assert.deepEqual(testConstructor[methodName](), testItem);
					});
				}

				if (hasSet) {
					it('should execute the "set" callback when the value is set', () => {
						const testConstructor = new TestConstructor();
						testSet = '';

						testConstructor[methodName](testItem);

						assert.deepEqual(testSet, testItem);
					});

					it('should execute the "set" callback when the value is set to the current value and a second parameter of "true" is provided', () => {
						const testConstructor = new TestConstructor();
						testSet = '';

						testConstructor[methodName](testItem);
						testSet = '';
						testConstructor[methodName](testItem, true);

						assert.deepEqual(testSet, testItem);
					});

					if (!hasGet) {
						it('should NOT execute the "set" callback when the value is set to the current value', () => {
							const testConstructor = new TestConstructor();
							testSet = '';

							testConstructor[methodName](testItem);
							testSet = '';
							testConstructor[methodName](testItem);

							assert.deepEqual(testSet, '');
						});
					}
				}

				if (hasBefore) {
					it('should call the "before" callback with the init value when a value is set', () => {
						const testConstructor = new TestConstructor();
						testBefore = '';

						testConstructor[methodName](testItem);

						assert.deepEqual(testBefore, init);
					});
				}

				if (hasOther) {
					if (!hasGet) {
						it('should be able to be set to other', () => {
							const testConstructor = new TestConstructor();

							testConstructor[methodName](undefined);

							assert.deepEqual(testConstructor[methodName](), undefined);
						});
					}
					else if (hasSet && init) {
						it('should be able to be set to other', () => {
							const testConstructor = new TestConstructor();
							testSet = '';

							testConstructor[methodName](undefined);

							assert.deepEqual(testSet, undefined);
						});
					}
					else if (hasBefore && !hasGet && init) {
						it('should be able to be set to other', () => {
							const testConstructor = new TestConstructor();
							testBefore = '';

							testConstructor[methodName](undefined);
							testConstructor[methodName](testItem);

							assert.deepEqual(testBefore, undefined);
						});
					}
					else if (hasBefore && hasGet && init) {
						it('should be able to be set to other', () => {
							const testConstructor = new TestConstructor();
							testBefore = '';

							testConstructor[methodName](undefined);

							assert.deepEqual(testBefore, init);
						});
					}
				}

				coerce.forEach((item) => {
					if (!hasGet) {
						it('should coerce ' + item.value + ' to ' + item.coerced, () => {
							const testConstructor = new TestConstructor();

							testConstructor[methodName](item.value);

							assert.deepEqual(testConstructor[methodName](), item.coerced);
						});
					}
					else if (hasSet) {
						it('should coerce ' + item.value + ' to ' + item.coerced, () => {
							const testConstructor = new TestConstructor();
							testSet = '';

							testConstructor[methodName](item.value);

							assert.deepEqual(testSet, item.coerced);
						});
					}
				});
			});
		});

		it('should not set the value of another method with the same variant', () => {
			const testConstructor = new TestConstructor();

			testConstructor[TEST_METHOD](testItem);

			assert.deepEqual(testConstructor[TEST_METHOD](), testItem);
			assert.deepEqual(testConstructor[TEST_METHOD + '2'](), init);
		});
	};

	const getOptionCallback = (option, withTestItem) => {
		switch (option) {
			case 'get':
				return withTestItem ? testGetCallbackWithTestItem : testGetCallback;
			case 'other':
				return undefined;
			case 'before':
				return testBeforeCallback;
			case 'set':
				return testSetCallback;
		}
	};

	const addMethodsTo = (applyTo, extraProps = {}) => {
		everyMethodVariant.forEach((methodData) => {
			const options = Object.assign({}, settings.extraProps, extraProps);

			methodData.options.forEach((option) => {
				options[option] = getOptionCallback(option, extraProps.init);
			});

			applyTo[methodData.name] = method[settings.name](options);
		});

		applyTo[TEST_METHOD + '2'] = method[settings.name](Object.assign({}, settings.extraProps, extraProps));
	};

	describe('(prototype)', () => {
		class TestConstructor1 {
		}

		addMethodsTo(TestConstructor1.prototype);

		runTests(TestConstructor1, settings.init, settings.true[0], settings.coerce || []);
	});

	describe('(prototype) (init)', () => {
		class TestConstructor2 {
		}

		addMethodsTo(TestConstructor2.prototype, {
			init: settings.true[0]
		});

		runTests(TestConstructor2, settings.true[0], settings.true[1], settings.coerce || []);

		settings.false.forEach((falseValue) => {
			it(`should return ${settings.true[0]} after attempting to set to ${falseValue}`, () => {
				const testConstructor = new TestConstructor2();

				testConstructor.testMethod(falseValue);

				assert.deepEqual(testConstructor.testMethod(), settings.true[0]);
			});
		});
	});

	describe('(property)', () => {
		const TestConstructor3 = function() {
			addMethodsTo(this);
		};

		runTests(TestConstructor3, settings.init, settings.true[0], settings.coerce || []);
	});

	describe('(property) (init)', () => {
		const TestConstructor4 = function() {
			addMethodsTo(this, {
				init: settings.true[0]
			});
		};

		runTests(TestConstructor4, settings.true[0], settings.true[1], settings.coerce || []);
	});

	if (settings.coerce !== false) {
		describe('(prototype) (coerce=true)', () => {
			class TestConstructor2 {
			}

			addMethodsTo(TestConstructor2.prototype, {
				init: undefined,
				coerce: true
			});

			settings.coerceTrue.forEach((value) => {
				it(`should return coerced ${value} after attempting to set to ${value}`, () => {
					const testConstructor = new TestConstructor2();

					testConstructor.testMethod(value);

					assert.notEqual(testConstructor.testMethod(), undefined);
				});
			});
		});

		describe('(prototype) (coerce=false)', () => {
			class TestConstructor2 {
			}

			addMethodsTo(TestConstructor2.prototype, {
				init: undefined,
				coerce: false
			});

			settings.coerceTrue.forEach((value) => {
				it(`should return coerced ${value} after attempting to set to ${value}`, () => {
					const testConstructor = new TestConstructor2();

					testConstructor.testMethod(value);

					assert.equal(testConstructor.testMethod(), undefined);
				});
			});
		});
	}
};

export const testVariant = (settings) => {
	const emptyFunction = () => {
	};
	const notEnforced = (newValue) => newValue;
	const simpleCompare = (newValue, oldValue) => newValue !== oldValue;
	const defaultOptions = {
		enforce: notEnforced,
		compare: simpleCompare,
		set: emptyFunction,
		get: emptyFunction,
		before: emptyFunction,
		other: []
	};

	it('should return the constructor after setting a value', () => {
		const Constructor = function() {
			this.testMethod = settings.variant(Object.assign({}, defaultOptions));
		};
		const constructor = new Constructor();

		constructor.testMethod('something');

		assert.equal(constructor.testMethod('something'), constructor);
	});

	if (settings.options.includes('get')) {
		if (settings.options.length !== 1) {
			it('should call the "enforce" callback with newValue, oldValue, and options', () => {
				let testVar = '';
				const variantOptions = Object.assign({}, defaultOptions, {
					enforce: function(newValue, oldValue, options) {
						if (newValue === '2' && oldValue === '1' && options === variantOptions) {
							testVar = newValue;
						}
						return newValue;
					},
					get: () => '1'
				});
				const Constructor = function() {
					this.testMethod = settings.variant(variantOptions);
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod('2');

				assert.equal(testVar, '2');
			});

			it('should call the "compare" callback with the value returned from enforce and the oldValue', () => {
				let testVar = '';
				const variantOptions = Object.assign({}, defaultOptions, {
					enforce: function() {
						return '3';
					},
					compare: (newValue, oldValue) => {
						if (newValue === '3' && oldValue === '1') {
							testVar = '4';
						}
						return true;
					},
					get: () => '1'
				});
				const Constructor = function() {
					this.testMethod = settings.variant(variantOptions);
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1');

				assert.equal(testVar, '4');
			});
		}

		describe('(get)', () => {
			it('should call the "get" callback with context', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						get: function() {
							testVar = this;
							return 'something';
						}
					}));
				};
				const constructor = new Constructor();

				assert.equal(constructor.testMethod(), 'something');
				assert.equal(testVar, constructor);
			});

			it('should run toString on the result of the "get" callback', () => {
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						get: function() {
							return new Point(1, 2);
						},
						stringify: true
					}));
				};
				const constructor = new Constructor();

				assert.equal(constructor.testMethod(), '1,2');
			});
		});
	}
	else {
		it('should call the "enforce" callback with newValue, oldValue, and options', () => {
			let testVar = '';
			const variantOptions = Object.assign({}, defaultOptions, {
				enforce: function(newValue, oldValue, options) {
					if (newValue === '2' && oldValue === '1' && options === variantOptions) {
						testVar = newValue;
					}
					return newValue;
				}
			});
			const Constructor = function() {
				this.testMethod = settings.variant(variantOptions);
			};
			const constructor = new Constructor();

			constructor
				.testMethod('1')
				.testMethod('2');

			assert.equal(testVar, '2');
		});

		it('should call the "compare" callback with the value returned from enforce and the oldValue', () => {
			let testVar = '';
			const variantOptions = Object.assign({}, defaultOptions, {
				enforce: function(newValue, oldValue, options) {
					if (newValue === '2' && oldValue === '1' && options === variantOptions) {
						testVar = newValue;
					}
					return newValue;
				},
				compare: (newValue, oldValue) => {
					if (newValue === '2' && oldValue === '1') {
						testVar = '4';
					}
					return true;
				}
			});
			const Constructor = function() {
				this.testMethod = settings.variant(variantOptions);
			};
			const constructor = new Constructor();

			constructor
				.testMethod('1')
				.testMethod('2');

			assert.equal(testVar, '4');
		});

		it('should NOT set a property Symbol on the constructor before the value is set', () => {
			const Constructor = function() {
				this.testMethod = settings.variant(Object.assign({}, defaultOptions));
			};
			const constructor = new Constructor();

			assert.equal(Object.getOwnPropertySymbols(constructor).length, 0);
		});

		it('should set a property Symbol on the constructor after the value is set', () => {
			const Constructor = function() {
				this.testMethod = settings.variant(Object.assign({}, defaultOptions));
			};
			const constructor = new Constructor();

			constructor.testMethod('something');

			assert.equal(Object.getOwnPropertySymbols(constructor).length, 1);
		});

		it('should save a value', () => {
			const Constructor = function() {
				this.testMethod = settings.variant(Object.assign({}, defaultOptions));
			};
			const constructor = new Constructor();

			constructor.testMethod('something');

			assert.equal(constructor.testMethod(), 'something');
		});

		it('should run toString on returned value if stringify is true', () => {
			const Constructor = function() {
				this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
					init: new Point(1, 2),
					stringify: true
				}));
			};
			const constructor = new Constructor();

			assert.deepEqual(constructor.testMethod(), '1,2');
		});
	}

	if (settings.options.includes('before')) {
		if (settings.options.includes('get')) {
			it('should call the "before" callback with the oldValue with context if "compare" returns true', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						before: function(oldValue) {
							if (oldValue === '1') {
								testVar = this;
							}
						},
						get: () => '1'
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod('2');

				assert.equal(testVar, constructor);
			});

			it('should NOT call the "before" callback if "compare" returns false', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						before: function(oldValue) {
							if (oldValue === '1') {
								testVar = this;
							}
						},
						get: () => '1'
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod('1');

				assert.equal(testVar, '');
			});

			it('should call the "before" callback if "compare" returns false and isForceSave is true', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						before: function(oldValue) {
							if (oldValue === '1') {
								testVar = this;
							}
						},
						get: () => '1'
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod('1', true);

				assert.equal(testVar, constructor);
			});
		}
		else {
			it('should call the "before" callback with the oldValue with context if "compare" returns true', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						before: function(oldValue) {
							if (oldValue === '1') {
								testVar = this;
							}
						}
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod('2');

				assert.equal(testVar, constructor);
			});

			it('should NOT call the "before" callback if "compare" returns false', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						before: function(oldValue) {
							if (oldValue === '1') {
								testVar = this;
							}
						}
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod('1');

				assert.equal(testVar, '');
			});

			it('should call the "before" callback if "compare" returns false and isForceSave is true', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						before: function(oldValue) {
							if (oldValue === '1') {
								testVar = this;
							}
						}
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod('1', true);

				assert.equal(testVar, constructor);
			});
		}
	}

	if (settings.options.includes('set')) {
		if (settings.options.includes('get')) {
			it('should call the "set" callback with the newValue with context if "compare" returns true', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						set: function(newValue) {
							if (newValue === '2') {
								testVar = this;
							}
						},
						get: () => '1'
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('2');

				assert.equal(testVar, constructor);
			});

			it('should NOT call the "set" callback if "compare" returns false', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						set: function(newValue) {
							if (newValue === '1') {
								testVar = this;
							}
						},
						get: () => '1'
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1');

				assert.equal(testVar, '');
			});

			it('should call the "set" callback if "compare" returns false and isForceSave is true', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						set: function(newValue) {
							if (newValue === '1') {
								testVar = this;
							}
						},
						get: () => '1'
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1', true);

				assert.equal(testVar, constructor);
			});
		}
		else {
			it('should call the "set" callback with the newValue with context if "compare" returns true', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						set: function(newValue) {
							if (newValue === '2') {
								testVar = this;
							}
						}
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1');
				testVar = '';
				constructor
					.testMethod('2');

				assert.equal(testVar, constructor);
			});

			it('should NOT call the "set" callback if "compare" returns false', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						set: function(newValue) {
							if (newValue === '2') {
								testVar = this;
							}
						}
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1');
				testVar = '';
				constructor
					.testMethod('1');

				assert.equal(testVar, '');
			});

			it('should call the "set" callback if "compare" returns false and isForceSave is true', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						set: function(newValue) {
							if (newValue === '1') {
								testVar = this;
							}
						}
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1');
				testVar = '';
				constructor
					.testMethod('1', true);

				assert.equal(testVar, constructor);
			});
		}
	}

	if (settings.options.includes('other')) {
		if (settings.options.includes('get')) {
			it('should call the "compare" callback with a different type if other has that type', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						enforce: enforceString,
						compare: function(newValue) {
							testVar = newValue;
						},
						get: () => '1',
						other: [RegExp, Boolean]
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod(true);

				assert.equal(testVar, true);
			});

			it('should call the "compare" callback with a different value if other has that value', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						enforce: enforceString,
						compare: function(newValue) {
							testVar = newValue;
						},
						get: () => '1',
						other: [RegExp, null]
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod(null);

				assert.equal(testVar, null);
			});
		}
		else {
			it('should set the value with a different type if other has that type', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						enforce: enforceString,
						compare: function(newValue) {
							testVar = newValue;
						},
						other: [RegExp, Boolean]
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod(true);

				assert.equal(testVar, true);
			});

			it('should set the value with a different value if other has that value', () => {
				let testVar = '';
				const Constructor = function() {
					this.testMethod = settings.variant(Object.assign({}, defaultOptions, {
						enforce: enforceString,
						compare: function(newValue) {
							testVar = newValue;
						},
						other: [RegExp, null]
					}));
				};
				const constructor = new Constructor();

				constructor
					.testMethod('1')
					.testMethod(null);

				assert.equal(testVar, null);
			});
		}
	}
};

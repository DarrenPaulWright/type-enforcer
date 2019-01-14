import { assert } from 'chai';
import { assign, each, join, map, startCase } from 'lodash';
import powerset from 'powerset';
import { method, Point } from '../../src';
import enforceString from '../../src/enforcer/types/enforceString';
import { processOutput } from '../../src/methods/variants/helper';

const variantSet = powerset(['get', 'other', 'before', 'set']);
const everyMethodVariant = map(variantSet, (combination) => {
	return 'testMethod' + join(map(combination, startCase), '');
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
		return settings.testItem;
	};

	const runTests = (TestConstructor, init, testItem, coerce) => {
		each(everyMethodVariant, (methodName) => {
			const hasGet = methodName.toLowerCase().indexOf('get') !== -1;
			const hasOther = methodName.toLowerCase().indexOf('other') !== -1;
			const hasBefore = methodName.toLowerCase().indexOf('before') !== -1;
			const hasSet = methodName.toLowerCase().indexOf('set') !== -1;

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

				each(coerce, (item) => {
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
	};

	describe('(prototype, default init)', () => {
		class TestConstructor1 {
		}

		assign(TestConstructor1.prototype, {
			testMethodBefore: method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback
			})),
			testMethodBeforeSet: method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback,
				set: testSetCallback
			})),
			testMethodGet: method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback
			})),
			testMethodGetBefore: method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback,
				get: testGetCallback
			})),
			testMethodGetBeforeSet: method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback,
				set: testSetCallback,
				get: testGetCallback
			})),
			testMethodGetOther: method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback,
				other: undefined
			})),
			testMethodGetOtherBefore: method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback,
				get: testGetCallback,
				other: undefined
			})),
			testMethodGetOtherBeforeSet: method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback,
				set: testSetCallback,
				get: testGetCallback,
				other: undefined
			})),
			testMethodGetOtherSet: method[settings.methodType](assign({}, settings.extraProps, {
				set: testSetCallback,
				get: testGetCallback,
				other: undefined
			})),
			testMethodGetSet: method[settings.methodType](assign({}, settings.extraProps, {
				set: testSetCallback,
				get: testGetCallback
			})),
			testMethodOther: method[settings.methodType](assign({}, settings.extraProps, {
				other: undefined
			})),
			testMethodOtherBefore: method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback,
				other: undefined
			})),
			testMethodOtherBeforeSet: method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback,
				set: testSetCallback,
				other: undefined
			})),
			testMethodOtherSet: method[settings.methodType](assign({}, settings.extraProps, {
				set: testSetCallback,
				other: undefined
			})),
			testMethodSet: method[settings.methodType](assign({}, settings.extraProps, {
				set: testSetCallback
			})),
			testMethod: method[settings.methodType](assign({}, settings.extraProps))
		});

		runTests(TestConstructor1, settings.init, settings.testItem, settings.coerce);
	});

	describe('(prototype, with init)', () => {
		class TestConstructor2 {
		}

		assign(TestConstructor2.prototype, {
			testMethodBefore: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback
			})),
			testMethodBeforeSet: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				set: testSetCallback
			})),
			testMethodGet: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				get: testGetCallbackWithTestItem
			})),
			testMethodGetBefore: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				get: testGetCallbackWithTestItem
			})),
			testMethodGetBeforeSet: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				set: testSetCallback,
				get: testGetCallbackWithTestItem
			})),
			testMethodGetOther: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				get: testGetCallbackWithTestItem,
				other: undefined
			})),
			testMethodGetOtherBefore: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				get: testGetCallbackWithTestItem,
				other: undefined
			})),
			testMethodGetOtherBeforeSet: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				set: testSetCallback,
				get: testGetCallbackWithTestItem,
				other: undefined
			})),
			testMethodGetOtherSet: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback,
				get: testGetCallbackWithTestItem,
				other: undefined
			})),
			testMethodGetSet: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback,
				get: testGetCallbackWithTestItem
			})),
			testMethodOther: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				other: undefined
			})),
			testMethodOtherBefore: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				other: undefined
			})),
			testMethodOtherSet: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback,
				other: undefined
			})),
			testMethodOtherBeforeSet: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				set: testSetCallback,
				other: undefined
			})),
			testMethodSet: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback
			})),
			testMethod: method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem
			}))
		});

		runTests(TestConstructor2, settings.testItem, settings.testItem2, settings.coerce);
	});

	describe('(property, default init)', () => {
		const TestConstructor3 = function() {
			this.testMethodBefore = method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback
			}));
			this.testMethodBeforeSet = method[settings.methodType](assign({}, settings.extraProps, {
				set: testSetCallback,
				before: testBeforeCallback
			}));
			this.testMethodGet = method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback
			}));
			this.testMethodGetBefore = method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback,
				before: testBeforeCallback
			}));
			this.testMethodGetBeforeSet = method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback,
				before: testBeforeCallback,
				set: testSetCallback
			}));
			this.testMethodGetOther = method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback,
				other: undefined
			}));
			this.testMethodGetOtherBefore = method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback,
				before: testBeforeCallback,
				other: undefined
			}));
			this.testMethodGetOtherBeforeSet = method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback,
				before: testBeforeCallback,
				set: testSetCallback,
				other: undefined
			}));
			this.testMethodGetOtherSet = method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback,
				set: testSetCallback,
				other: undefined
			}));
			this.testMethodGetSet = method[settings.methodType](assign({}, settings.extraProps, {
				get: testGetCallback,
				set: testSetCallback
			}));
			this.testMethodOther = method[settings.methodType](assign({}, settings.extraProps, {
				other: undefined
			}));
			this.testMethodOtherBefore = method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback,
				other: undefined
			}));
			this.testMethodOtherBeforeSet = method[settings.methodType](assign({}, settings.extraProps, {
				before: testBeforeCallback,
				set: testSetCallback,
				other: undefined
			}));
			this.testMethodOtherSet = method[settings.methodType](assign({}, settings.extraProps, {
				set: testSetCallback,
				other: undefined
			}));
			this.testMethodSet = method[settings.methodType](assign({}, settings.extraProps, {
				set: testSetCallback
			}));
			this.testMethod = method[settings.methodType](assign({}, settings.extraProps));
		};

		runTests(TestConstructor3, settings.init, settings.testItem, settings.coerce);
	});

	describe('(property, with init)', () => {
		const TestConstructor4 = function() {
			this.testMethodBefore = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback
			}));
			this.testMethodBeforeSet = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback,
				before: testBeforeCallback
			}));
			this.testMethodGet = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				get: testGetCallbackWithTestItem
			}));
			this.testMethodGetBefore = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				get: testGetCallbackWithTestItem
			}));
			this.testMethodGetBeforeSet = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				set: testSetCallback,
				get: testGetCallbackWithTestItem
			}));
			this.testMethodGetOther = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				get: testGetCallbackWithTestItem,
				other: undefined
			}));
			this.testMethodGetOtherBefore = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				get: testGetCallbackWithTestItem,
				other: undefined
			}));
			this.testMethodGetOtherBeforeSet = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				set: testSetCallback,
				get: testGetCallbackWithTestItem,
				other: undefined
			}));
			this.testMethodGetOtherSet = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback,
				get: testGetCallbackWithTestItem,
				other: undefined
			}));
			this.testMethodGetSet = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback,
				get: testGetCallbackWithTestItem
			}));
			this.testMethodOther = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				other: undefined
			}));
			this.testMethodOtherBefore = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				other: undefined
			}));
			this.testMethodOtherBeforeSet = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				before: testBeforeCallback,
				set: testSetCallback,
				other: undefined
			}));
			this.testMethodOtherSet = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback,
				other: undefined
			}));
			this.testMethodSet = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback
			}));
			this.testMethod = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem
			}));
		};

		runTests(TestConstructor4, settings.testItem, settings.testItem2, settings.coerce);
	});
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
			this.testMethod = settings.variant(assign({}, defaultOptions));
		};
		const constructor = new Constructor();

		constructor.testMethod('something');

		assert.equal(constructor.testMethod('something'), constructor);
	});

	if (settings.options.includes('get')) {
		if (settings.options.length !== 1) {
			it('should call the "enforce" callback with newValue, oldValue, and options', () => {
				let testVar = '';
				const variantOptions = assign({}, defaultOptions, {
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
				const variantOptions = assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
			const variantOptions = assign({}, defaultOptions, {
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
			const variantOptions = assign({}, defaultOptions, {
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
				this.testMethod = settings.variant(assign({}, defaultOptions));
			};
			const constructor = new Constructor();

			assert.equal(Object.getOwnPropertySymbols(constructor).length, 0);
		});

		it('should set a property Symbol on the constructor after the value is set', () => {
			const Constructor = function() {
				this.testMethod = settings.variant(assign({}, defaultOptions));
			};
			const constructor = new Constructor();

			constructor.testMethod('something');

			assert.equal(Object.getOwnPropertySymbols(constructor).length, 1);
		});

		it('should save a value', () => {
			const Constructor = function() {
				this.testMethod = settings.variant(assign({}, defaultOptions));
			};
			const constructor = new Constructor();

			constructor.testMethod('something');

			assert.equal(constructor.testMethod(), 'something');
		});

		it('should run toString on returned value if stringify is true', () => {
			const Constructor = function() {
				this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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
					this.testMethod = settings.variant(assign({}, defaultOptions, {
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

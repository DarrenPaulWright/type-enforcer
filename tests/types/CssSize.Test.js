import { assert } from 'chai';
import { concat, each, map } from 'lodash';
import {
	AUTO,
	CENTIMETERS,
	CH,
	CssSize,
	EM,
	EX,
	INCHES,
	INHERIT,
	INITIAL,
	MILLIMETERS,
	NONE,
	PERCENT,
	PICAS,
	PIXELS,
	POINTS,
	ROOT_EM,
	Thickness,
	VIEWPORT_HEIGHT,
	VIEWPORT_MIN,
	VIEWPORT_WIDTH,
	ZERO_PIXELS
} from '../../src/index';

const unitlessSizes = map([AUTO, INITIAL, INHERIT, NONE], (size) => ({
	size: size,
	value: undefined,
	unit: undefined
}));
const otherValidSizes = [{
	size: ZERO_PIXELS,
	value: 0,
	unit: ''
}, {
	size: 0,
	value: 0,
	unit: ''
}, {
	size: 123.4,
	value: 123.4,
	unit: PIXELS
}, {
	size: -32.9,
	value: -32.9,
	unit: PIXELS
}, {
	size: new CssSize('3px'),
	value: 3,
	unit: PIXELS
}];
const validSizes = concat(unitlessSizes, otherValidSizes);
const fixedUnits = ['',
	PIXELS,
	CENTIMETERS,
	EM,
	ROOT_EM,
	EX,
	CH,
	INCHES,
	MILLIMETERS,
	PICAS,
	POINTS,
	VIEWPORT_HEIGHT,
	VIEWPORT_WIDTH,
	VIEWPORT_MIN];
const percentUnits = [PERCENT];
const units = concat(percentUnits, fixedUnits);

const positiveUnits = map(units, (unit) => ({
	size: '47.3' + unit,
	value: '47.3',
	unit: unit || PIXELS
}));
const negativeUnits = map(units, (unit) => ({
	size: '-327.2' + unit,
	value: '-327.2',
	unit: unit || PIXELS
}));
const notationUnits = map(units, (unit) => ({
	size: '1E2' + unit,
	value: '1E2',
	unit: unit || PIXELS
}));

const validValues = concat(positiveUnits, negativeUnits, notationUnits, validSizes);
const validValues2 = concat(positiveUnits, validSizes);
const inValidValues = [undefined, 'asdf', null, {}, /asdf/, [], new Thickness()];

describe('CssSize', () => {
	describe('constructor', () => {
		it('should default to 0', () => {
			assert.equal(new CssSize().toString(), '0');
		});

		const testIsValid = (value) => {
			if (value.size !== 0 && value.size !== '0') {
				it('should accept the value ' + value.size + ' when instantiated', () => {
					assert.notEqual(new CssSize(value.size).toString(), '0');
				});
			}
		};
		const testIsNotValid = (value) => {
			it('should NOT accept the value ' + value + ' when instantiated', () => {
				assert.equal(new CssSize(value).toString(), '0');
			});
		};

		each(validValues, testIsValid);
		each(inValidValues, testIsNotValid);
	});

	describe('.isValid', () => {
		const testIsValid = (value) => {
			it('should return true for ' + value.size, () => {
				assert.isTrue(CssSize.isValid(value.size));
			});
		};
		const testIsNotValid = (value) => {
			it('should return false for ' + value, () => {
				assert.isNotTrue(CssSize.isValid(value));
			});
		};

		each(validValues, testIsValid);
		each(inValidValues, testIsNotValid);
	});

	describe('.set', () => {
		const testIsValid = (value) => {
			if (value.size !== 0 && value.size !== '0') {
				it('should accept the value ' + value.size, () => {
					assert.notEqual(new CssSize().set(value.size).toString(), '0');
				});
			}
		};
		const testIsNotValid = (value) => {
			it('should NOT accept the value ' + value, () => {
				assert.equal(new CssSize().set(value).toString(), '0');
			});
		};

		each(validValues, testIsValid);
		each(inValidValues, testIsNotValid);
	});

	describe('.units', () => {
		const testIsValid = (value) => {
			if (value.size !== 0 && value.size !== '0') {
				it('should return ' + value.unit + ' when the value is ' + value.size, () => {
					assert.equal(new CssSize(value.size).units, value.unit);
				});
			}
		};
		const testIsNotValid = (value) => {
			it('should return an empty string when the value is set to ' + value, () => {
				assert.equal(new CssSize(value).units, '');
			});
		};

		each(validValues, testIsValid);
		each(inValidValues, testIsNotValid);
	});

	describe('.value', () => {
		const testIsValid = (value) => {
			if (value.size !== 0 && value.size !== '0') {
				it('should return ' + value.value + ' when the value is ' + value.size, () => {
					assert.equal(new CssSize(value.size).value, value.value);
				});
			}
		};
		const testIsNotValid = (value) => {
			it('should return 0 when the value is set to ' + value, () => {
				assert.equal(new CssSize(value).value, 0);
			});
		};

		each(validValues, testIsValid);
		each(inValidValues, testIsNotValid);
	});

	describe('.toPixels', () => {
		const cssSize = new CssSize();

		it('should return "16px" when the value is 1rem', () => {
			assert.equal(cssSize.set('1rem').toPixels(), '16px');
		});

		it('should return "3px" when the value is "3px"', () => {
			assert.equal(cssSize.set('3px').toPixels(), '3px');
		});

		it('should return "144px" when the value is "1.5in"', () => {
			assert.equal(cssSize.set('1.5in').toPixels(), '144px');
		});

		it('should return "75.6px" when the value is "2cm"', () => {
			assert.equal(cssSize.set('2cm').toPixels(), '75.5626px');
		});

		it('should return "7.56px" when the value is "2mm"', () => {
			assert.equal(cssSize.set('2mm').toPixels(), '7.53126px');
		});

		it('should return "6px" when the value is "8pt"', () => {
			assert.equal(cssSize.set('8pt').toPixels(), '10.62504px');
		});

		it('should return "128px" when the value is "8pc"', () => {
			assert.equal(cssSize.set('8pc').toPixels(), '128px');
		});

		it('should return "12px" when the value is "2vh"', () => {
			assert.equal(cssSize.set('2vh').toPixels(), '12px');
		});

		it('should return "16px" when the value is "2vw"', () => {
			assert.equal(cssSize.set('2vw').toPixels(), '16px');
		});

		it('should return "12px" when the value is "2vmin"', () => {
			assert.equal(cssSize.set('2vmin').toPixels(), '12px');
		});

		it('should return "32px" when the value is "2em"', () => {
			assert.equal(cssSize.set('2em').toPixels(), '32px');
		});

		it('should return "14.3125px" when the value is "2ex"', () => {
			assert.equal(cssSize.set('2ex').toPixels(), '14.3125px');
		});

		it('should return "16px" when the value is "2ch"', () => {
			assert.equal(cssSize.set('2ch').toPixels(), '16px');
		});

		describe('with element NOT attached to DOM', () => {
			const getCssSizeWithElement = () => {
				const cssSize = new CssSize();
				const element = document.createElement('div');
				element.style.fontSize = '40px';
				cssSize.element(element);
				return cssSize;
			};

			it('should return "0px" when the value is "2em"', () => {
				const cssSize = getCssSizeWithElement();
				assert.deepEqual(cssSize.set('2em').toPixels(), '0');
			});

			it('should return "0px" when the value is "2ex"', () => {
				const cssSize = getCssSizeWithElement();
				assert.deepEqual(cssSize.set('2ex').toPixels(), '0');
			});

			it('should return "0px" when the value is "2ch"', () => {
				const cssSize = getCssSizeWithElement();
				assert.deepEqual(cssSize.set('2ch').toPixels(), '0');
			});

			it('should return "0px" when the value is "2em" and true', () => {
				const cssSize = getCssSizeWithElement();
				assert.deepEqual(cssSize.set('2em').toPixels(true), 0);
			});

			it('should return "0px" when the value is "2ex" and true', () => {
				const cssSize = getCssSizeWithElement();
				assert.deepEqual(cssSize.set('2ex').toPixels(true), 0);
			});

			it('should return "0px" when the value is "2ch" and true', () => {
				const cssSize = getCssSizeWithElement();
				assert.deepEqual(cssSize.set('2ch').toPixels(true), 0);
			});
		});

		describe('with element attached to DOM', () => {
			const getCssSizeWithElement = () => {
				const cssSize = new CssSize();
				const element = document.createElement('div');
				element.style.fontSize = '40px';
				document.body.appendChild(element);
				cssSize.element(element);
				return cssSize;
			};

			it('should return "40px" when the value is "2em"', () => {
				const cssSize = getCssSizeWithElement();
				assert.equal(cssSize.set('2em').toPixels(), '80px');
			});

			it('should return "14.3125px" when the value is "2ex"', () => {
				const cssSize = getCssSizeWithElement();
				assert.equal(cssSize.set('2ex').toPixels(), '35.7812px');
			});

			it('should return "16px" when the value is "2ch"', () => {
				const cssSize = getCssSizeWithElement();
				assert.equal(cssSize.set('2ch').toPixels(), '40px');
			});

			it('should return "40px" when the value is "2em" and true', () => {
				const cssSize = getCssSizeWithElement();
				assert.equal(cssSize.set('2em').toPixels(true), 80);
			});

			it('should return "14.3125px" when the value is "2ex" and true', () => {
				const cssSize = getCssSizeWithElement();
				assert.equal(cssSize.set('2ex').toPixels(true), 35.7812);
			});

			it('should return "16px" when the value is "2ch" and true', () => {
				const cssSize = getCssSizeWithElement();
				assert.equal(cssSize.set('2ch').toPixels(true), 40);
			});
		});

		each(unitlessSizes, (size) => {
			it('should return "' + size.size + '" when the value is "' + size.size + '"', () => {
				assert.equal(cssSize.set(size.size).toPixels(), size.size);
			});
		});
	});

	describe('.isAuto', () => {
		const testIsValid = (value) => {
			if (value.size !== 0 && value.size !== '0') {
				it('should return ' + value.value + ' when the value is ' + value.size, () => {
					assert.equal(new CssSize(value.size).isAuto, value.size === AUTO);
				});
			}
		};
		const testIsNotValid = (value) => {
			it('should return 0 when the value is set to ' + value, () => {
				assert.equal(new CssSize(value).isAuto, false);
			});
		};

		each(validValues, testIsValid);
		each(inValidValues, testIsNotValid);
	});

	describe('.isFixed', () => {
		const testIsValid = (value) => {
			if (value.size !== 0 && value.size !== '0') {
				it('should return ' + value.value + ' when the value is ' + value.size, () => {
					assert.equal(new CssSize(value.size).isFixed, fixedUnits.includes(value.unit));
				});
			}
		};
		const testIsNotValid = (value) => {
			it('should return 0 when the value is set to ' + value, () => {
				assert.equal(new CssSize(value).isFixed, false);
			});
		};

		each(validValues, testIsValid);
		each(inValidValues, testIsNotValid);
	});

	describe('.isPercent', () => {
		const testIsValid = (value) => {
			if (value.size !== 0 && value.size !== '0') {
				it('should return ' + value.value + ' when the value is ' + value.size, () => {
					assert.equal(new CssSize(value.size).isPercent, percentUnits.includes(value.unit));
				});
			}
		};
		const testIsNotValid = (value) => {
			it('should return 0 when the value is set to ' + value, () => {
				assert.equal(new CssSize(value).isPercent, false);
			});
		};

		each(validValues, testIsValid);
		each(inValidValues, testIsNotValid);
	});

	describe('.isSame', () => {
		const testIsValid = (cssSize, value2) => {
			it('should return true when both values are ' + value2, () => {
				assert.isTrue(cssSize.isSame(value2));
			});
		};
		const testIsNotValid = (cssSize, value2) => {
			it('should return false when the value is ' + cssSize + ' and the test value is ' + value2, () => {
				assert.isFalse(cssSize.isSame(value2));
			});
		};

		each(validValues2, (value) => {
			const cssSize = new CssSize(value.size);

			each(validValues2, (value2) => {
				if (value !== value2 &&
					!(value.size == 0 && value2.size === '0' || value.size == '0' && value2.size === 0) &&
					!(value.size + PIXELS === value2.size || value.size === value2.size + PIXELS)) {
					testIsNotValid(cssSize, value2.size);
				}
				else {
					testIsValid(cssSize, value2.size);
				}
			});

			each(inValidValues, (value2) => {
				testIsNotValid(cssSize, value2);
			});
		});

		it('should return true for values that equate to the same pixels', () => {
			assert.isTrue(new CssSize('16px').isSame(new CssSize('1rem')));
		});
	});
});

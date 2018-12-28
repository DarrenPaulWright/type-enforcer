import { assert } from 'chai';
import Moment from 'moment';
import { CssSize, AUTO, INHERIT, INITIAL, enforce, Thickness, Enum } from '../src/index';

const validArray1 = [{
	id: 1
}];
const validArray2 = [{
	id: 2
}];
const validCssSize1 = AUTO;
const validCssSize2 = new CssSize('100px');
const validThickness1 = '1px';
const validThickness2 = new Thickness('100px 200px');
const validString1 = 'test string';
const validString2 = 'test string 2';
const validFunction1 = () => {
	const test1 = 1;
};
const validFunction2 = () => {
	const test2 = 2;
};
const validInt = 11;
const validFloat = 34.23463456;
const validObject = {
	id: 1
};
const validObject2 = {
	id: 2
};
const validEnumObject = new Enum({
	test1: 'test 1',
	test2: 'test 2',
	test3: 'test 3'
});
const validEnum1 = validEnumObject.test1;
const validEnum2 = validEnumObject.test2;
const validDateString = '2012/03/27';
const invalidDateString = '03/342/1831';
const validDate1 = new Date('1/1/2000');
const validDate2 = new Date();
const validMomentjs = new Moment(validDate1);
const validElement = document.createElement('div');
const validElement2 = document.createElement('span');

describe('enforce', () => {
	const runNegativeTests = (methodName, defaultValue, exceptions) => {
		exceptions = exceptions || [];

		const shouldRun = (testName) => methodName !== testName && !exceptions.includes(testName);

		if (shouldRun('array')) {
			it('should return the default value when an array is provided', () => {
				assert.deepEqual(enforce[methodName](validArray1, defaultValue), defaultValue);
			});
		}
		if (shouldRun('bool')) {
			it('should return the default value when a true is provided', () => {
				assert.deepEqual(enforce[methodName](true, defaultValue), defaultValue);
			});
			it('should return the default value when a false is provided', () => {
				assert.deepEqual(enforce[methodName](false, defaultValue), defaultValue);
			});
		}
		if (shouldRun('undefined')) {
			it('should return the default value when undefined is provided', () => {
				assert.deepEqual(enforce[methodName](undefined, defaultValue), defaultValue);
			});
		}
		if (shouldRun('null')) {
			it('should return the default value when null is provided', () => {
				assert.deepEqual(enforce[methodName](null, defaultValue), defaultValue);
			});
		}
		if (shouldRun('string')) {
			it('should return the default value when an empty string is provided', () => {
				assert.deepEqual(enforce[methodName]('', defaultValue), defaultValue);
			});
			it('should return the default value when a string is provided', () => {
				assert.deepEqual(enforce[methodName](validString1, defaultValue), defaultValue);
			});
		}
		if (shouldRun('date')) {
			it('should return the default value when a date is provided', () => {
				assert.deepEqual(enforce[methodName](validDate1, defaultValue), defaultValue);
			});
			it('should return the default value when a momentjs object is provided', () => {
				assert.deepEqual(enforce[methodName](validMomentjs, defaultValue), defaultValue);
			});
		}
		if (shouldRun('cssSize')) {
			it('should return the default value when a css size is provided', () => {
				assert.deepEqual(enforce[methodName](validCssSize2, defaultValue), defaultValue);
			});
		}
		if (shouldRun('element')) {
			it('should return the default value when a DOM element is provided', () => {
				assert.deepEqual(enforce[methodName](validElement, defaultValue), defaultValue);
			});
		}
		if (shouldRun('func')) {
			it('should return the default value when a function is provided', () => {
				assert.deepEqual(enforce[methodName](validFunction1, defaultValue), defaultValue);
			});
		}
		if (shouldRun('int')) {
			it('should return the default value when an int is provided', () => {
				assert.deepEqual(enforce[methodName](validInt, defaultValue), defaultValue);
			});
		}
		if (shouldRun('number')) {
			it('should return the default value when a float is provided', () => {
				assert.deepEqual(enforce[methodName](validFloat, defaultValue), defaultValue);
			});
		}
		if (shouldRun('object')) {
			it('should return the default value when an object is provided', () => {
				assert.deepEqual(enforce[methodName](validObject, defaultValue), defaultValue);
			});
		}
		if (shouldRun('thickness')) {
			it('should return the default value when a thickness is provided', () => {
				assert.deepEqual(enforce[methodName](validThickness2, defaultValue), defaultValue);
			});
		}
	};

	describe('.array', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.array(validArray1, validArray2), validArray1);
			assert.notDeepEqual(enforce.array(validArray1, validArray2), validArray2);
		});

		runNegativeTests('array', validArray2);
	});

	describe('.bool', () => {
		it('should return the setter value when a boolean is provided', () => {
			assert.deepEqual(enforce.bool(true, false), true);
			assert.deepEqual(enforce.bool(false, true), false);
		});
		it('should NOT return the setter value when the string \'true\' is provided', () => {
			assert.deepEqual(enforce.bool('true', false), false);
		});
		it('should NOT return the setter value when the string \'false\' is provided', () => {
			assert.deepEqual(enforce.bool('false', true), true);
		});

		runNegativeTests('bool', true);
	});

	describe('.cssSize', () => {
		it('should return the setter value when a valid css size is provided', () => {
			assert.isTrue(enforce.cssSize(validCssSize1, validCssSize2) instanceof CssSize);
			assert.equal(enforce.cssSize(validCssSize1, validCssSize2).toString(), validCssSize1);
		});
		it('should return the setter value when "inherit" is provided', () => {
			assert.deepEqual(enforce.cssSize(INHERIT, validCssSize2).toString(), INHERIT);
		});
		it('should return the setter value when "initial" is provided', () => {
			assert.deepEqual(enforce.cssSize(INITIAL, validCssSize2).toString(), INITIAL);
		});

		runNegativeTests('cssSize', validCssSize2);
	});

	describe('.date', () => {
		it('should return the setter value when a valid date is provided', () => {
			assert.deepEqual(enforce.date(validDate2, validDate1), validDate2);
			assert.notDeepEqual(enforce.date(validDate2, validDate1), validDate1);
		});
		it('should return the setter value when a valid momentjs object is provided', () => {
			assert.deepEqual(enforce.date(validMomentjs, validDate1), validMomentjs);
			assert.notDeepEqual(enforce.date(validMomentjs, validDate1), validDate1);
		});
		it('should return the default value when a date string is provided', () => {
			assert.deepEqual(enforce.date(validDateString, validDate1), validDate1);
		});
		it('should return the default value when an invalid momentjs object is provided', () => {
			assert.deepEqual(enforce.date(Moment(invalidDateString, 'MM-DD-YYYY'), validDate1), validDate1);
		});

		runNegativeTests('date', validDate1);
	});

	describe('.element', () => {
		it('should return the setter value when a DOM element is provided', () => {
			assert.equal(enforce.element(validElement, validElement2), validElement);
			assert.notEqual(enforce.element(validElement, validElement2), validElement2);
		});

		runNegativeTests('element', validElement2);
	});

	describe('.enum', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.enum(validEnum1, validEnumObject, validEnum2), validEnum1);
			assert.notDeepEqual(enforce.enum(validEnum1, validEnumObject, validEnum2), validEnum2);
		});

		it('should return the default value when a true is provided', () => {
			assert.deepEqual(enforce.enum(true, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when a false is provided', () => {
			assert.deepEqual(enforce.enum(false, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when undefined is provided', () => {
			assert.deepEqual(enforce.enum(undefined, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when null is provided', () => {
			assert.deepEqual(enforce.enum(null, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when an empty string is provided', () => {
			assert.deepEqual(enforce.enum('', validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when a date is provided', () => {
			assert.deepEqual(enforce.enum(validDate1, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when a momentjs object is provided', () => {
			assert.deepEqual(enforce.enum(validMomentjs, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when a css size is provided', () => {
			assert.deepEqual(enforce.enum(validCssSize2, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when an array is provided', () => {
			assert.deepEqual(enforce.enum(validArray1, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when an int is provided', () => {
			assert.deepEqual(enforce.enum(validInt, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when a float is provided', () => {
			assert.deepEqual(enforce.enum(validFloat, validEnumObject, validEnum2), validEnum2);
		});
		it('should return the default value when a function is provided', () => {
			assert.deepEqual(enforce.enum(validFunction1, validEnumObject, validEnum2), validEnum2);
		});
	});

	describe('.func', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.func(validFunction1, validFunction2), validFunction1);
			assert.notDeepEqual(enforce.func(validFunction1, validFunction2), validFunction2);
		});

		runNegativeTests('func', validFunction2);
	});

	describe('.int', () => {
		it('should return the setter value when an int is provided', () => {
			assert.deepEqual(enforce.int(validInt, validFloat), validInt);
		});
		it('should return the setter value when a float is provided', () => {
			assert.deepEqual(enforce.int(validFloat, validInt), validInt);
		});
		it('should return the min value when a int less than the min value is provided', () => {
			assert.deepEqual(enforce.int(-12, validInt, 0, 5), 0);
		});
		it('should return the max value when a int greater than the max value is provided', () => {
			assert.deepEqual(enforce.int(12, validInt, 0, 5), 5);
		});

		runNegativeTests('int', validInt);
	});

	describe('.number', () => {
		it('should return the setter value when an int is provided', () => {
			assert.deepEqual(enforce.number(validInt, validFloat), validInt);
			assert.notDeepEqual(enforce.number(validInt, validFloat), validFloat);
		});
		it('should return the default value when a float is provided', () => {
			assert.deepEqual(enforce.number(validFloat, validInt), validFloat);
		});
		it('should return the min value when a number less than the min value is provided', () => {
			assert.deepEqual(enforce.number(-12, validInt, 0, 5), 0);
		});
		it('should return the max value when a number greater than the max value is provided', () => {
			assert.deepEqual(enforce.number(12, validInt, 0, 5), 5);
		});

		runNegativeTests('number', validInt);
	});

	describe('.object', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.object(validObject2, validObject), validObject2);
			assert.notDeepEqual(enforce.object(validObject2, validObject), validObject);
		});

		runNegativeTests('object', validObject);
	});

	describe('.string', () => {
		it('should return the setter value when a string is provided', () => {
			assert.deepEqual(enforce.string(validString2, validString1), validString2);
			assert.notDeepEqual(enforce.string(validString2, validString1), validString1);
		});

		runNegativeTests('string', validString1, ['cssSize']);
	});

	describe('.thickness', () => {
		it('should return the setter value when a valid css size is provided', () => {
			assert.isTrue(enforce.cssSize(validThickness1, validThickness2) instanceof CssSize);
			assert.equal(enforce.cssSize(validThickness1, validThickness2).toString(), validThickness1);
		});

		it('should return the setter value when "inherit" is provided', () => {
			assert.deepEqual(enforce.cssSize(INHERIT, validThickness2).toString(), INHERIT);
		});

		it('should return the setter value when "initial" is provided', () => {
			assert.deepEqual(enforce.cssSize(INITIAL, validThickness2).toString(), INITIAL);
		});

		runNegativeTests('thickness', validThickness2);
	});
});

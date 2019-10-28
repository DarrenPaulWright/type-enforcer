import { assert } from 'chai';
import displayValue from 'display-value';
import { enforce } from '../src';
import { multiTest } from './TestUtil';
import { TestClass, testTypes, validEnumObject } from './testValues';

export default (data, enforcer, coercer) => {
	it('should exist in the exported "enforce" object', () => {
		assert.deepEqual(enforcer, enforce[data.name]);
	});

	it(`should return the setter value when a ${data.name} is provided`, () => {
		if (data.extraArg) {
			assert.deepEqual(enforce[data.name](data.true[1], data.extraArg, data.true[0]), data.true[1]);
			assert.notDeepEqual(enforce[data.name](data.true[1], data.extraArg, data.true[0]), data.true[0]);
		}
		else {
			assert.deepEqual(enforce[data.name](data.true[1], data.true[0]), data.true[1]);
			assert.notDeepEqual(enforce[data.name](data.true[1], data.true[0]), data.true[0]);
		}
	});

	if (coercer === Number) {
		it('should return the min value when a integer less than the min value is provided', () => {
			assert.deepEqual(enforce[data.name](-12, 11, false, 0, 5), 0);
		});
		it('should return the max value when a integer greater than the max value is provided', () => {
			assert.deepEqual(enforce[data.name](12, 11, false, 0, 5), 5);
		});
	}

	multiTest({
		values: data.coerceTrue.map((item) => {
			return {
				input: item,
				output: item
			};
		}),
		message(input) {
			return `should NOT return a coerced ${displayValue(input)} when coerce is false`;
		},
		test(value) {
			return enforce[data.name](value, value, false);
		},
		inputKey: 'input',
		outputKey: 'output',
		assertion: 'deepEqual'
	});

	describe('coerce', () => {
		if (coercer) {
			multiTest({
				values: data.coerceTrue.map((item) => {
					return {
						input: item,
						output: coercer(item)
					};
				}),
				message(input) {
					return `should return a coerced ${displayValue(input)} when coerce is true`;
				},
				test(value) {
					return enforce[data.name](value, value, true);
				},
				inputKey: 'input',
				outputKey: 'output',
				assertion: 'deepEqual'
			});
		}

		multiTest({
			values: data.coerceFalse,
			message(input) {
				return `should return the alt value when ${displayValue(input)} is provided and coerce is true`;
			},
			test(value) {
				return enforce[data.name](value, 'testAlt', true);
			},
			output: 'testAlt',
			assertion: 'deepEqual'
		});
	});

	runNegativeTests(data.name, data.true[0], data.extraArg);
}

export const runNegativeTests = (methodName, defaultValue, otherArg) => {
	testTypes.forEach((data) => {
		if (data.name && !([data.name].concat(data.skip).includes(methodName))) {
			data.true.forEach((testItem) => {
				it(`should return the default value when ${displayValue(testItem)} is provided`, () => {
					if (otherArg) {
						assert.deepEqual(enforce[methodName](testItem, otherArg, defaultValue), defaultValue);
					}
					else {
						assert.deepEqual(enforce[methodName](testItem, defaultValue), defaultValue);
					}
				});
			});
		}
	});

	if (methodName !== 'enum' && methodName !== 'string') {
		it('should return the default value when an enum value is provided', () => {
			if (otherArg) {
				assert.deepEqual(enforce[methodName](validEnumObject.test1, otherArg, defaultValue), defaultValue);
			}
			else {
				assert.deepEqual(enforce[methodName](validEnumObject.test1, defaultValue), defaultValue);
			}
		});
	}

	if (methodName !== 'instanceOf') {
		it('should return the default value when an instance is provided', () => {
			if (otherArg) {
				assert.deepEqual(enforce[methodName](new TestClass(), otherArg, defaultValue), defaultValue);
			}
			else {
				assert.deepEqual(enforce[methodName](new TestClass(), defaultValue), defaultValue);
			}
		});
	}

	it('should return the default value when undefined is provided', () => {
		if (otherArg) {
			assert.deepEqual(enforce[methodName](undefined, otherArg, defaultValue), defaultValue);
		}
		else {
			assert.deepEqual(enforce[methodName](undefined, defaultValue), defaultValue);
		}
	});

	it('should return the default value when null is provided', () => {
		if (otherArg) {
			assert.deepEqual(enforce[methodName](null, otherArg, defaultValue), defaultValue);
		}
		else {
			assert.deepEqual(enforce[methodName](null, defaultValue), defaultValue);
		}
	});
};

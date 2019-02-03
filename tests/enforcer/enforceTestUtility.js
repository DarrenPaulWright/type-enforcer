import { assert } from 'chai';
import { enforce, Enum } from '../../src';
import { testTypes, validVectors } from '../TestUtil';

const validEnumObject = new Enum({
	test1: 'test 1',
	test2: 'test 2',
	test3: 'test 3'
});
const validEnum1 = validEnumObject.test1;

export const runNegativeTests = (methodName, defaultValue, otherArg) => {
	testTypes.forEach((data) => {
		if (data.name && !([data.name].concat(data.skip).includes(methodName))) {
			data.true.forEach((testItem) => {
				it(`should return the default value when ${testItem} is provided`, () => {
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
				assert.deepEqual(enforce[methodName](validEnum1, otherArg, defaultValue), defaultValue);
			}
			else {
				assert.deepEqual(enforce[methodName](validEnum1, defaultValue), defaultValue);
			}
		});
	}

	if (methodName !== 'instance') {
		it('should return the default value when an instance is provided', () => {
			if (otherArg) {
				assert.deepEqual(enforce[methodName](validVectors[0], otherArg, defaultValue), defaultValue);
			}
			else {
				assert.deepEqual(enforce[methodName](validVectors[0], defaultValue), defaultValue);
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

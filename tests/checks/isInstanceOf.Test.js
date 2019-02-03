import { assert } from 'chai';
import { is, isInstanceOf } from '../../src';
import { testTypes } from '../testValues';

describe('isInstanceOf', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isInstanceOf, is.instanceOf);
	});

	testTypes.forEach((baseType) => {
		baseType.true.forEach((newValue) => {
			if (baseType.value) {
				it('should return true for "' + newValue + '" and "' + baseType.value + '"', () => {
					assert.isTrue(isInstanceOf(newValue, baseType.value));
				});
			}
		});

		baseType.false.forEach((newValue) => {
			if (baseType.value) {
				it('should return false for [' + baseType.value + '] and "' + newValue + '"', () => {
					assert.isFalse(isInstanceOf(newValue, baseType.value));
				});
			}
		});
	});
});

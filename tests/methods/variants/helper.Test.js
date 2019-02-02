import { assert } from 'chai';
import { hasOtherValidValue } from '../../../src/methods/variants/helper';
import { testTypes, testValues } from '../../TestUtil';

describe('hasOtherValidValue', () => {
	testValues.forEach((baseValue) => {
		it('should return true for [' + baseValue + '] and "' + baseValue + '"', () => {
			assert.isTrue(hasOtherValidValue([baseValue], baseValue));
		});

		testValues.forEach((otherValue) => {
			if (baseValue !== otherValue) {
				it('should return false for [' + baseValue + '] and ' + otherValue + '"', () => {
					assert.isFalse(hasOtherValidValue([baseValue], otherValue));
				});
			}
		});
	});

	testTypes.forEach((baseType) => {
		if (baseType.value) {
			baseType.true.forEach((newValue) => {
				it('should return true for [' + baseType.value + '] and "' + newValue + '"', () => {
					assert.isTrue(hasOtherValidValue([baseType.value], newValue));
				});
			});

			baseType.false.forEach((newValue) => {
				it('should return false for [' + baseType.value + '] and "' + newValue + '"', () => {
					assert.isFalse(hasOtherValidValue([baseType.value], newValue));
				});
			});
		}
	});
});

import { assert } from 'chai';
import { each } from 'lodash';
import { hasOtherValidValue } from '../../../src/methods/variants/helper';
import { testTypes, testValues } from '../../TestUtil';

describe('hasOtherValidValue', () => {
	each(testValues, (baseValue) => {
		it('should return true for [' + baseValue + '] and "' + baseValue + '"', () => {
			assert.isTrue(hasOtherValidValue([baseValue], baseValue));
		});

		each(testValues, (otherValue) => {
			if (baseValue !== otherValue) {
				it('should return false for [' + baseValue + '] and ' + otherValue + '"', () => {
					assert.isFalse(hasOtherValidValue([baseValue], otherValue));
				});
			}
		});
	});

	each(testTypes, (baseType) => {
		each(baseType.true, (newValue) => {
			it('should return true for [' + baseType.value + '] and "' + newValue + '"', () => {
				assert.isTrue(hasOtherValidValue([baseType.value], newValue));
			});
		});

		each(baseType.false, (newValue) => {
			it('should return false for [' + baseType.value + '] and "' + newValue + '"', () => {
				assert.isFalse(hasOtherValidValue([baseType.value], newValue));
			});
		});
	});
});

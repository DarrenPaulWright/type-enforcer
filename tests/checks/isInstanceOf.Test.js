import { assert } from 'chai';
import { each } from 'lodash';
import isInstanceOf from '../../src/checks/isInstanceOf';
import { testTypes } from '../TestUtil';

describe('isInstanceOf', () => {
	each(testTypes, (baseType) => {
		each(baseType.true, (newValue) => {
			if (baseType.value) {
				it('should return true for "' + newValue + '" and "' + baseType.value + '"', () => {
					assert.isTrue(isInstanceOf(newValue, baseType.value));
				});
			}
		});

		each(baseType.false, (newValue) => {
			if (baseType.value) {
				it('should return false for [' + baseType.value + '] and "' + newValue + '"', () => {
					assert.isFalse(isInstanceOf(newValue, baseType.value));
				});
			}
		});
	});
});

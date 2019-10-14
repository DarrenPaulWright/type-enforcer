import { assert } from 'chai';
import { is, isJson } from '../../src';
import { multiTest } from '../TestUtil';
import { validDates, validFunctions, validObjects, validRegExps, validStrings } from '../testValues';

export const testValues = [].concat(
	[undefined],
	validDates,
	validFunctions,
	validObjects,
	validRegExps,
	validStrings
);

const data = {
	true: ['[]', '{}'],
	false: [].concat(testValues, ['json'])
};

describe('isJson', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isJson, is.json);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isJson(value);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test(value) {
			return isJson(value);
		},
		assertion: 'isFalse'
	});
});

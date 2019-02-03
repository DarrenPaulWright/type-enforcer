import { assert } from 'chai';
import { is, isJson } from '../../src';
import {
	multiTest,
	validCssSizes,
	validDates,
	validDockPoints,
	validElements,
	validFunctions,
	validObjects,
	validPoints,
	validRegExps,
	validStrings,
	validThicknesses,
	validVectors
} from '../TestUtil';

export const testValues = [].concat(
	[undefined],
	validDates,
	validElements,
	validFunctions,
	validObjects,
	validRegExps,
	validStrings,
	validCssSizes,
	validDockPoints,
	validPoints,
	validThicknesses
);

const data = {
	true: ['[]', '{}'].concat(validVectors),
	false: [].concat(testValues, ['json'])
};

describe('isJson', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isJson, is.json);
	});

	multiTest({
		values: data.true,
		test: (value) => isJson(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isJson(value),
		assertion: 'isFalse'
	});
});

import { assert } from 'chai';
import { enforce, enforceRegExp } from '../../../src';
import { multiTest } from '../../TestUtil';
import { regExpData as data, validRegExps } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.regExp', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceRegExp, enforce.regExp);
		});

		it('should return the setter value when a RegExp is provided', () => {
			assert.deepEqual(enforce.regExp(validRegExps[1], validRegExps[0]), validRegExps[1]);
			assert.notDeepEqual(enforce.regExp(validRegExps[1], validRegExps[0]), validRegExps[0]);
		});

		multiTest({
			values: [{
				input: 'test',
				output: /test/
			}, {
				input: '/[a-z]+/',
				output: /[a-z]+/
			}, {
				input: '/[a-z]+/gi',
				output: /[a-z]+/gi
			}],
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.regExp(value, value, true),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: item
				};
			}),
			message: (input) => `should NOT return a coerced ${input} when coerce is false`,
			test: (value) => enforce.regExp(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.regExp(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('regExp', validRegExps[1]);
	});
});

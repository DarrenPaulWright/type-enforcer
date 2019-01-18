import { assert } from 'chai';
import { map } from 'lodash';
import { enforce } from '../../../src';
import { regExpData as data, multiTest, validRegExps } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.regExp', () => {
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
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: item
				}
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

import { assert } from 'chai';
import { map } from 'lodash';
import { enforce, enforceString } from '../../../src';
import { multiTest, stringData as data, validStrings } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.string', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceString, enforce.string);
		});

		it('should return the setter value when a string is provided', () => {
			assert.deepEqual(enforce.string(validStrings[1], validStrings[0]), validStrings[1]);
			assert.notDeepEqual(enforce.string(validStrings[1], validStrings[0]), validStrings[0]);
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: item.toString()
				};
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.string(value, value, true),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: item
				};
			}),
			message: (input) => `should NOT return a coerced ${input} when coerce is false`,
			test: (value) => enforce.string(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.string(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('string', validStrings[1]);
	});
});

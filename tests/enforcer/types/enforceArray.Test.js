import { assert } from 'chai';
import { map } from 'lodash';
import { enforce } from '../../../src';
import { arrayData as data, multiTest, validArrays } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.array', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.array(validArrays[0], validArrays[1]), validArrays[0]);
			assert.notDeepEqual(enforce.array(validArrays[0], validArrays[1]), validArrays[1]);
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: new Array(item)
				}
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.array(value, value, true),
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
			test: (value) => enforce.array(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.array(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('array', validArrays[1]);
	});
});

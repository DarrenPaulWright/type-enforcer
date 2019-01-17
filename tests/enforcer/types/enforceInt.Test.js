import { assert } from 'chai';
import { map } from 'lodash';
import { enforce } from '../../../src';
import { multiTest, intData as data } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

const validInt = 11;
const validFloat = 34.23463456;

describe('enforce', () => {
	describe('.int', () => {
		it('should return the setter value when an int is provided', () => {
			assert.deepEqual(enforce.int(validInt, validFloat), validInt);
		});
		it('should return the setter value when a float is provided', () => {
			assert.deepEqual(enforce.int(validFloat, validInt), validInt);
		});
		it('should return the min value when a int less than the min value is provided', () => {
			assert.deepEqual(enforce.int(-12, validInt, false, 0, 5), 0);
		});
		it('should return the max value when a int greater than the max value is provided', () => {
			assert.deepEqual(enforce.int(12, validInt, false, 0, 5), 5);
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: Number(item)
				}
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.int(value, value, true),
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
			test: (value) => enforce.int(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.int(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('int', validInt);
	});
});

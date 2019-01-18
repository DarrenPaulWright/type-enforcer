import { assert } from 'chai';
import { map } from 'lodash';
import { enforce } from '../../../src';
import { multiTest, numberData as data } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

const validInt = 11;
const validFloat = 34.23463456;

describe('enforce', () => {
	describe('.number', () => {
		it('should return the setter value when an int is provided', () => {
			assert.deepEqual(enforce.number(validInt, validFloat), validInt);
			assert.notDeepEqual(enforce.number(validInt, validFloat), validFloat);
		});
		it('should return the default value when a float is provided', () => {
			assert.deepEqual(enforce.number(validFloat, validInt), validFloat);
		});
		it('should return the min value when a number less than the min value is provided', () => {
			assert.deepEqual(enforce.number(-12, validInt, false, 0, 5), 0);
		});
		it('should return the max value when a number greater than the max value is provided', () => {
			assert.deepEqual(enforce.number(12, validInt, false, 0, 5), 5);
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: Number(item)
				}
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.number(value, value, true),
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
			test: (value) => enforce.number(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.number(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('number', validInt);
	});
});

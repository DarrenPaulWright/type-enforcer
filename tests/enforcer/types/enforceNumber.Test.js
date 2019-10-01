import { assert } from 'chai';
import { enforce, enforceNumber } from '../../../src';
import { multiTest } from '../../TestUtil';
import { numberData as data } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

const validInt = 11;
const validFloat = 34.23463456;

describe('enforce', () => {
	describe('.number', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceNumber, enforce.number);
		});

		it('should return the setter value when an integer is provided', () => {
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
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: Number(item)
				};
			}),
			message(input) {
				return `should return a coerced ${input} when coerce is true`;
			},
			test(value) {
				return enforce.number(value, value, true);
			},
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
			message(input) {
				return `should NOT return a coerced ${input} when coerce is false`;
			},
			test(value) {
				return enforce.number(value, value, false);
			},
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message(input) {
				return `should return the alt value when ${input} is provided and coerce is true`;
			},
			test(value) {
				return enforce.number(value, 'testAlt', true);
			},
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('number', validInt);
	});
});

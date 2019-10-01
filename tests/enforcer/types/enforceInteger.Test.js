import { assert } from 'chai';
import { enforce, enforceInteger } from '../../../src';
import { multiTest } from '../../TestUtil';
import { integerData as data } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

const validInt = 11;
const validFloat = 34.23463456;

describe('enforce', () => {
	describe('.integer', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceInteger, enforce.integer);
		});

		it('should return the setter value when an integer is provided', () => {
			assert.deepEqual(enforce.integer(validInt, validFloat), validInt);
		});
		it('should return the setter value when a float is provided', () => {
			assert.deepEqual(enforce.integer(validFloat, validInt), validInt);
		});
		it('should return the min value when a integer less than the min value is provided', () => {
			assert.deepEqual(enforce.integer(-12, validInt, false, 0, 5), 0);
		});
		it('should return the max value when a integer greater than the max value is provided', () => {
			assert.deepEqual(enforce.integer(12, validInt, false, 0, 5), 5);
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
				return enforce.integer(value, value, true);
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
				return enforce.integer(value, value, false);
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
				return enforce.integer(value, 'testAlt', true);
			},
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('integer', validInt);
	});
});

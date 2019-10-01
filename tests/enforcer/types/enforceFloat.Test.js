import { assert } from 'chai';
import { enforce, enforceFloat } from '../../../src';
import { multiTest } from '../../TestUtil';
import { floatData as data } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

const validInt = 11;
const validFloat = 34.23463456;

describe('enforce', () => {
	describe('.float', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceFloat, enforce.float);
		});

		it('should return the setter value when an float is provided', () => {
			assert.deepEqual(enforce.float(validInt, validFloat), validInt);
		});
		it('should return the setter value when a float is provided', () => {
			assert.deepEqual(enforce.float(validFloat, validInt), validFloat);
		});
		it('should return the min value when a float less than the min value is provided', () => {
			assert.deepEqual(enforce.float(-12, validInt, false, 0, 5), 0);
		});
		it('should return the max value when a float greater than the max value is provided', () => {
			assert.deepEqual(enforce.float(12, validInt, false, 0, 5), 5);
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
				return enforce.float(value, value, true);
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
				return enforce.float(value, value, false);
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
				return enforce.float(value, 'testAlt', true);
			},
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('float', validInt);
	});
});

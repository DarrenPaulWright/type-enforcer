import { assert } from 'chai';
import { enforce, enforceBoolean } from '../../../src';
import { multiTest } from '../../TestUtil';
import { booleanData as data } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.boolean', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceBoolean, enforce.boolean);
		});

		it('should return the setter value when a boolean is provided', () => {
			assert.deepEqual(enforce.boolean(true, false), true);
			assert.deepEqual(enforce.boolean(false, true), false);
		});
		it('should NOT return the setter value when the string \'true\' is provided', () => {
			assert.deepEqual(enforce.boolean('true', false), false);
		});
		it('should NOT return the setter value when the string \'false\' is provided', () => {
			assert.deepEqual(enforce.boolean('false', true), true);
		});

		multiTest({
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: !!item
				};
			}),
			message(input) {
				return `should return a coerced ${input} when coerce is true`;
			},
			test(value) {
				return enforce.boolean(value, 'alt value', true);
			},
			inputKey: 'input',
			outputKey: 'output'
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
				return enforce.boolean(value, value, false);
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
				return enforce.boolean(value, 'testAlt', true);
			},
			output: 'testAlt'
		});

		runNegativeTests('boolean', true);
	});
});

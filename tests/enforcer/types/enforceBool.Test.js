import { assert } from 'chai';
import { map } from 'lodash';
import { enforce } from '../../../src';
import { boolData as data, multiTest } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.bool', () => {
		it('should return the setter value when a boolean is provided', () => {
			assert.deepEqual(enforce.bool(true, false), true);
			assert.deepEqual(enforce.bool(false, true), false);
		});
		it('should NOT return the setter value when the string \'true\' is provided', () => {
			assert.deepEqual(enforce.bool('true', false), false);
		});
		it('should NOT return the setter value when the string \'false\' is provided', () => {
			assert.deepEqual(enforce.bool('false', true), true);
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: !!item
				}
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.bool(value, 'alt value', true),
			inputKey: 'input',
			outputKey: 'output'
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: item
				}
			}),
			message: (input) => `should NOT return a coerced ${input} when coerce is false`,
			test: (value) => enforce.bool(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.bool(value, 'testAlt', true),
			output: 'testAlt'
		});

		runNegativeTests('bool', true);
	});
});

import { assert } from 'chai';
import { enforce, enforceObject } from '../../../src';
import { multiTest } from '../../TestUtil';
import { objectData as data, validObjects } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.object', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceObject, enforce.object);
		});

		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.object(validObjects[1], validObjects[0]), validObjects[1]);
			assert.notDeepEqual(enforce.object(validObjects[1], validObjects[0]), validObjects[0]);
		});

		multiTest({
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: JSON.parse(item)
				};
			}),
			message(input) {
				return `should return a coerced ${input} when coerce is true`;
			},
			test(value) {
				return enforce.object(value, value, true);
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
				return enforce.object(value, value, false);
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
				return enforce.object(value, 'testAlt', true);
			},
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('object', validObjects[0]);
	});
});

import { assert } from 'chai';
import { map } from 'lodash';
import { enforce, enforceObject } from '../../../src';
import { multiTest, objectData as data, validObjects } from '../../TestUtil';
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
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: new Object(item)
				};
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.object(value, value, true),
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
			test: (value) => enforce.object(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.object(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('object', validObjects[0]);
	});
});

import { assert } from 'chai';
import { enforce, enforceVector, Vector } from '../../../src';
import { multiTest } from '../../TestUtil';
import { validVectors, vectorData as data } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.vector', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceVector, enforce.vector);
		});

		it('should return the setter value when a valid Vector is provided', () => {
			assert.isTrue(enforce.vector(validVectors[0], validVectors[1]) instanceof Vector);
			assert.equal(enforce.vector(validVectors[0], validVectors[1]).toString(), validVectors[0]);
		});

		multiTest({
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: new Vector(item)
				};
			}),
			message(input) {
				return `should return a coerced ${input} when coerce is true`;
			},
			test(value) {
				return enforce.vector(value, value, true);
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
				return enforce.vector(value, value, false);
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
				return enforce.vector(value, 'testAlt', true);
			},
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('vector', validVectors[1]);
	});
});

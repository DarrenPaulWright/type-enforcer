import { assert } from 'chai';
import { map } from 'lodash';
import { enforce, Vector } from '../../../src';
import { multiTest, vectorData as data, validVectors } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.vector', () => {
		it('should return the setter value when a valid Vector is provided', () => {
			assert.isTrue(enforce.vector(validVectors[0], validVectors[1]) instanceof Vector);
			assert.equal(enforce.vector(validVectors[0], validVectors[1]).toString(), validVectors[0]);
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: new Vector(item)
				}
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.vector(value, value, true),
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
			test: (value) => enforce.vector(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.vector(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('vector', validVectors[1]);
	});
});

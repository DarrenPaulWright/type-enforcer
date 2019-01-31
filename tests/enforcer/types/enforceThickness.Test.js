import { assert } from 'chai';
import { map } from 'lodash';
import { enforce, enforceThickness, INHERIT, INITIAL, Thickness } from '../../../src';
import { multiTest, thicknessData as data, validThicknesses } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.thickness', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceThickness, enforce.thickness);
		});

		it('should return the setter value when a valid css size is provided', () => {
			assert.isTrue(enforce.thickness(validThicknesses[0], validThicknesses[1]) instanceof Thickness);
			assert.equal(enforce.thickness(validThicknesses[0], validThicknesses[1]).toString(), validThicknesses[0]);
		});

		it('should return the setter value when "inherit" is provided', () => {
			assert.deepEqual(enforce.thickness(INHERIT, validThicknesses[1], true).toString(), INHERIT);
		});

		it('should return the setter value when "initial" is provided', () => {
			assert.deepEqual(enforce.thickness(INITIAL, validThicknesses[1], true).toString(), INITIAL);
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: new Thickness(item)
				};
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.thickness(value, value, true),
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
			test: (value) => enforce.thickness(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.thickness(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('thickness', validThicknesses[1]);
	});
});

import { assert } from 'chai';
import { enforce, enforcePoint, Point } from '../../../src';
import { multiTest } from '../../TestUtil';
import { pointData as data, validPoints } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.point', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforcePoint, enforce.point);
		});

		it('should return the setter value when a valid Point is provided', () => {
			assert.isTrue(enforce.point(validPoints[0], validPoints[1]) instanceof Point);
			assert.equal(enforce.point(validPoints[0], validPoints[1]).toString(), validPoints[0]);
		});

		multiTest({
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: new Point(item)
				};
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.point(value, value, true),
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
			message: (input) => `should NOT return a coerced ${input} when coerce is false`,
			test: (value) => enforce.point(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.point(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('point', validPoints[1]);
	});
});

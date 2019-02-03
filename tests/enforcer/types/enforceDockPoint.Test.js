import { assert } from 'chai';
import { DockPoint, enforce, enforceDockPoint } from '../../../src';
import { multiTest } from '../../TestUtil';
import { dockPointData as data, validDockPoints } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.dockPoint', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceDockPoint, enforce.dockPoint);
		});

		it('should return the setter value when a valid DockPoint is provided', () => {
			assert.isTrue(enforce.dockPoint(validDockPoints[0], validDockPoints[1]) instanceof DockPoint);
			assert.equal(enforce.dockPoint(validDockPoints[0], validDockPoints[1]).toString(), validDockPoints[0]);
		});

		multiTest({
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: new DockPoint(item)
				};
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.dockPoint(value, value, true),
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
			test: (value) => enforce.dockPoint(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.dockPoint(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('dockPoint', validDockPoints[1]);
	});
});

import { assert } from 'chai';
import { DockPoint, enforce } from '../../../src';
import { validDockPoints } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.dockPoint', () => {
		it('should return the setter value when a valid DockPoint is provided', () => {
			assert.isTrue(enforce.dockPoint(validDockPoints[0], validDockPoints[1]) instanceof DockPoint);
			assert.equal(enforce.dockPoint(validDockPoints[0], validDockPoints[1]).toString(), validDockPoints[0]);
		});

		runNegativeTests('dockPoint', validDockPoints[1]);
	});
});

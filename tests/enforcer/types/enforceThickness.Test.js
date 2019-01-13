import { assert } from 'chai';
import { enforce, INHERIT, INITIAL, Thickness } from '../../../src';
import { validThicknesses } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.thickness', () => {
		it('should return the setter value when a valid css size is provided', () => {
			assert.isTrue(enforce.thickness(validThicknesses[0], validThicknesses[1]) instanceof Thickness);
			assert.equal(enforce.thickness(validThicknesses[0], validThicknesses[1]).toString(), validThicknesses[0]);
		});

		it('should return the setter value when "inherit" is provided', () => {
			assert.deepEqual(enforce.thickness(INHERIT, validThicknesses[1]).toString(), INHERIT);
		});

		it('should return the setter value when "initial" is provided', () => {
			assert.deepEqual(enforce.thickness(INITIAL, validThicknesses[1]).toString(), INITIAL);
		});

		runNegativeTests('thickness', validThicknesses[1]);
	});
});

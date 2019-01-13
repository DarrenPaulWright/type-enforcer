import { assert } from 'chai';
import { AUTO, CssSize, enforce, INHERIT, INITIAL } from '../../../src';
import { validCssSizes } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.cssSize', () => {
		it('should return the setter value when a valid css size is provided', () => {
			assert.isTrue(enforce.cssSize(AUTO, validCssSizes[0]) instanceof CssSize);
			assert.equal(enforce.cssSize(AUTO, validCssSizes[0]).toString(), AUTO);
		});
		it('should return the setter value when "inherit" is provided', () => {
			assert.deepEqual(enforce.cssSize(INHERIT, validCssSizes[0]).toString(), INHERIT);
		});
		it('should return the setter value when "initial" is provided', () => {
			assert.deepEqual(enforce.cssSize(INITIAL, validCssSizes[0]).toString(), INITIAL);
		});

		runNegativeTests('cssSize', validCssSizes[0]);
	});
});

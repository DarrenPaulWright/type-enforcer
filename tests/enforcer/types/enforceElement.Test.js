import { assert } from 'chai';
import { enforce, enforceElement } from '../../../src';
import { validElements } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.element', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceElement, enforce.element);
		});

		it('should return the setter value when a DOM element is provided', () => {
			assert.equal(enforce.element(validElements[0], validElements[1]), validElements[0]);
			assert.notEqual(enforce.element(validElements[0], validElements[1]), validElements[1]);
		});

		runNegativeTests('element', validElements[1]);
	});
});

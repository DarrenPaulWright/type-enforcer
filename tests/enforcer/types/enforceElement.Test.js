import { assert } from 'chai';
import { enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validElement = document.createElement('div');
const validElement2 = document.createElement('span');

describe('enforce', () => {
	describe('.element', () => {
		it('should return the setter value when a DOM element is provided', () => {
			assert.equal(enforce.element(validElement, validElement2), validElement);
			assert.notEqual(enforce.element(validElement, validElement2), validElement2);
		});

		runNegativeTests('element', validElement2);
	});
});

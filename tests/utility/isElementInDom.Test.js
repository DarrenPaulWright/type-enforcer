import { assert } from 'chai';
import isElementInDom from '../../src/utility/isElementInDom';

describe('isElementInDom', () => {
	it('should return false for nothing', () => {
		assert.isFalse(isElementInDom());
	});
	it('should return false for a undefined', () => {
		assert.isFalse(isElementInDom(undefined));
	});
	it('should return false for a string', () => {
		assert.isFalse(isElementInDom('test'));
	});
	it('should return false for an element that isn\'t in the Dom', () => {
		const element = document.createElement('div');
		assert.isFalse(isElementInDom(element));
	});
	it('should return true for an element that is in the Dom', () => {
		const element = document.createElement('div');
		document.body.appendChild(element)
		assert.isTrue(isElementInDom(element));
	});
});

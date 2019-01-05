import { assert } from 'chai';
import { AUTO, CssSize, enforce, INHERIT, INITIAL } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validCssSize1 = AUTO;
const validCssSize2 = new CssSize('100px');

describe('enforce', () => {
	describe('.cssSize', () => {
		it('should return the setter value when a valid css size is provided', () => {
			assert.isTrue(enforce.cssSize(validCssSize1, validCssSize2) instanceof CssSize);
			assert.equal(enforce.cssSize(validCssSize1, validCssSize2).toString(), validCssSize1);
		});
		it('should return the setter value when "inherit" is provided', () => {
			assert.deepEqual(enforce.cssSize(INHERIT, validCssSize2).toString(), INHERIT);
		});
		it('should return the setter value when "initial" is provided', () => {
			assert.deepEqual(enforce.cssSize(INITIAL, validCssSize2).toString(), INITIAL);
		});

		runNegativeTests('cssSize', validCssSize2);
	});
});

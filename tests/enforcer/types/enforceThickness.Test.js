import { assert } from 'chai';
import { CssSize, enforce, INHERIT, INITIAL, Thickness } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validThickness1 = '1px';
const validThickness2 = new Thickness('100px 200px');

describe('enforce', () => {
	describe('.thickness', () => {
		it('should return the setter value when a valid css size is provided', () => {
			assert.isTrue(enforce.cssSize(validThickness1, validThickness2) instanceof CssSize);
			assert.equal(enforce.cssSize(validThickness1, validThickness2).toString(), validThickness1);
		});

		it('should return the setter value when "inherit" is provided', () => {
			assert.deepEqual(enforce.cssSize(INHERIT, validThickness2).toString(), INHERIT);
		});

		it('should return the setter value when "initial" is provided', () => {
			assert.deepEqual(enforce.cssSize(INITIAL, validThickness2).toString(), INITIAL);
		});

		runNegativeTests('thickness', validThickness2);
	});
});

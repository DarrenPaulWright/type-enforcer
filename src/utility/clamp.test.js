import { describe, it } from 'hippogriff';
import { clamp } from '../../index.js';
import assert from '../assert/assert.js';

describe('clamp', () => {
	it('should clamp to a min value', () => {
		assert.equal(clamp(2, 3, 4), 3);
	});

	it('should clamp to a max value', () => {
		assert.equal(clamp(5, 3, 4), 4);
	});

	it('should not clamp a valid value', () => {
		assert.equal(clamp(4, 3, 5), 4);
	});

	it('should return the original value if equal to min', () => {
		// eslint-disable-next-line no-new-wrappers
		const value = new Number(4);
		assert.equal(clamp(value, 4, 5), value);
	});

	it('should return the original value if equal to max', () => {
		// eslint-disable-next-line no-new-wrappers
		const value = new Number(4);
		assert.equal(clamp(value, 3, 4), value);
	});

	it('should return the original value', () => {
		// eslint-disable-next-line no-new-wrappers
		const value = new Number(4);
		assert.equal(clamp(value, 3, 5), value);
	});
});

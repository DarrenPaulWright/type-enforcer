import { assert } from 'chai';
import { Thickness } from '../../src/index';

describe('Thickness', () => {
	describe('init', () => {
		it('should default to zeros when instantiated', () => {
			const thickness = new Thickness();

			assert.equal(thickness.top, 0);
			assert.equal(thickness.right, 0);
			assert.equal(thickness.bottom, 0);
			assert.equal(thickness.left, 0);
		});

		it('should accept a single number when instantiated', () => {
			const thickness = new Thickness(3);

			assert.equal(thickness.top, 3);
			assert.equal(thickness.right, 3);
			assert.equal(thickness.bottom, 3);
			assert.equal(thickness.left, 3);
		});

		it('should accept two numbers when instantiated', () => {
			const thickness = new Thickness(3, 5);

			assert.equal(thickness.top, 3);
			assert.equal(thickness.right, 5);
			assert.equal(thickness.bottom, 3);
			assert.equal(thickness.left, 5);
		});

		it('should accept three numbers when instantiated', () => {
			const thickness = new Thickness(3, 5, 8);

			assert.equal(thickness.top, 3);
			assert.equal(thickness.right, 5);
			assert.equal(thickness.bottom, 8);
			assert.equal(thickness.left, 5);
		});

		it('should accept four numbers when instantiated', () => {
			const thickness = new Thickness(3, 5, 8, 12);

			assert.equal(thickness.top, 3);
			assert.equal(thickness.right, 5);
			assert.equal(thickness.bottom, 8);
			assert.equal(thickness.left, 12);
		});

		it('should accept a string with a single number when instantiated', () => {
			const thickness = new Thickness('3');

			assert.equal(thickness.top, 3);
			assert.equal(thickness.right, 3);
			assert.equal(thickness.bottom, 3);
			assert.equal(thickness.left, 3);
		});

		it('should accept a string with two numbers when instantiated', () => {
			const thickness = new Thickness('3, 5');

			assert.equal(thickness.top, 3);
			assert.equal(thickness.right, 5);
			assert.equal(thickness.bottom, 3);
			assert.equal(thickness.left, 5);
		});

		it('should accept a string with three numbers when instantiated', () => {
			const thickness = new Thickness('3 5 8');

			assert.equal(thickness.top, 3);
			assert.equal(thickness.right, 5);
			assert.equal(thickness.bottom, 8);
			assert.equal(thickness.left, 5);
		});

		it('should accept a string with four numbers when instantiated', () => {
			const thickness = new Thickness('3, 5, 8, 12');

			assert.equal(thickness.top, 3);
			assert.equal(thickness.right, 5);
			assert.equal(thickness.bottom, 8);
			assert.equal(thickness.left, 12);
		});
	});

	describe('methods', () => {
		it('should add the top and bottom when vertical is called', () => {
			const thickness = new Thickness(3, 4, 5, 6);

			assert.equal(thickness.vertical, 8);
		});

		it('should add the left and right when horizontal is called', () => {
			const thickness = new Thickness(3, 4, 5, 6);

			assert.equal(thickness.horizontal, 10);
		});
	});

	describe('.isValid', () => {
		it('should return true for an instance of Thickness', () => {
			assert.isTrue(Thickness.isValid(new Thickness(0)));
		});

		it('should return true for one number', () => {
			assert.isTrue(Thickness.isValid(1));
		});

		it('should return true for two numbers', () => {
			assert.isTrue(Thickness.isValid(1, 2));
		});

		it('should return true for three numbers', () => {
			assert.isTrue(Thickness.isValid(1, 2, 3));
		});

		it('should return true for four numbers', () => {
			assert.isTrue(Thickness.isValid(1, 2, 3, 4));
		});

		it('should return true for one css value', () => {
			assert.isTrue(Thickness.isValid('1px'));
		});

		it('should return true for two css values', () => {
			assert.isTrue(Thickness.isValid('1px', '2px'));
		});

		it('should return true for three css values', () => {
			assert.isTrue(Thickness.isValid('1px', '2px', '3px'));
		});

		it('should return true for four css values', () => {
			assert.isTrue(Thickness.isValid('1px', '2px', '3px', '4px'));
		});

		it('should return true for a string with four css values', () => {
			assert.isTrue(Thickness.isValid('1px 2px 3px 4px'));
		});

		it('should return false for a string with bad css values', () => {
			assert.isFalse(Thickness.isValid('1px asdf 3px 4px'));
		});
	});

	describe('.toString', () => {
		it('should add "px" to each side', () => {
			const thickness = new Thickness(3, 4, 5, 6);

			assert.equal(thickness.toString(), '3px 4px 5px 6px');
		});

		it('should convert css units on each side', () => {
			const thickness = new Thickness('2pc 2em 2pc 2vmin');

			assert.equal(thickness.toString(), '32px 32px 32px 12px');
		});

		it('should combine all sides into one if they are the same', () => {
			const thickness = new Thickness(3, 3, 3, 3);

			assert.equal(thickness.toString(), '3px');
		});

		it('should combine top/bottom and left/right if they are the same', () => {
			const thickness = new Thickness(3, 5, 3, 5);

			assert.equal(thickness.toString(), '3px 5px');
		});

		it('should combine left/right if they are the same', () => {
			const thickness = new Thickness(3, 5, 4, 5);

			assert.equal(thickness.toString(), '3px 5px 4px');
		});

		it('should convert non-pixel units', () => {
			const thickness = new Thickness('16px 4rem 1rem');

			assert.equal(thickness.toString(), '16px 64px');
		});

		it('should convert non-pixel units', () => {
			const thickness = new Thickness('12px 4rem');

			assert.equal(thickness.toString(), '12px 64px');
		});
	});
});

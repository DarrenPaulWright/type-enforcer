import { assert } from 'chai';
import angle from '../../src/utility/angle';

describe('angle', () => {
	describe('.normalize', () => {
		it('should change 2 * PI to 0', () => {
			assert.equal(angle.normalize(Math.PI * 2), 0);
		});

		it('should change -2 * PI to 0', () => {
			assert.equal(angle.normalize(-Math.PI * 2), 0);
		});

		it('should normalize the angle when greater than 2 * PI', () => {
			assert.equal(angle.normalize(Math.PI * 2.5), Math.PI / 2);
		});

		it('should normalize the angle when multiple times greater than 2 * PI', () => {
			assert.equal(Math.round(angle.normalize(Math.PI * 10.5) * 1000000), Math.round((Math.PI / 2) * 1000000));
		});

		it('should normalize the angle when less than 0', () => {
			assert.equal(angle.normalize(-Math.PI * 5 / 2), Math.PI * 3 / 2);
		});

		it('should normalize the angle when multiple times less than 0', () => {
			assert.equal(Math.round(angle.normalize(-Math.PI * 11) * 1000000), Math.round(Math.PI * 1000000));
		});
	});

	describe('.fromOrigin', () => {
		it('should return PI / 2 when {x:0, y:4} is passed in', () => {
			assert.equal(angle.fromOrigin({
				x: 0,
				y: 4
			}), Math.PI / 2);
		});

		it('should return PI *3 / 2 when {x:0, y:-4} is passed in', () => {
			assert.equal(angle.fromOrigin({
				x: 0,
				y: -4
			}), Math.PI * 3 / 2);
		});
	});
});

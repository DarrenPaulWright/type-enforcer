import { assert } from 'chai';
import applySettings from '../../src/utility/applySettings';

describe('applySettings', () => {
	it('should apply settings', () => {
		let testVar = 0;
		const target = {
			first(value) {
				if (value === 1) {
					testVar += 1;
				}
			},
			second(value) {
				if (value === 2) {
					testVar += 1;
				}
			},
			third(value) {
				if (value === 3) {
					testVar += 1;
				}
			}
		};

		applySettings(target, {
			first: 1,
			second: 2,
			third: 3
		});

		assert.deepEqual(testVar, 3);
	});

	it('should apply settings in order', () => {
		let testVar = 0;
		const target = {
			first(value) {
				if (value === 1 && testVar === 3) {
					testVar += 1;
				}
			},
			second(value) {
				if (value === 2) {
					testVar += 1;
				}
			},
			third(value) {
				if (value === 3 && testVar === 0) {
					testVar += 1;
				}
			},
			fourth(value) {
				if (value === 4) {
					testVar += 1;
				}
			}
		};

		applySettings(target, {
			first: 1,
			second: 2,
			third: 3,
			fourth: 4
		}, ['third'], ['first']);

		assert.deepEqual(testVar, 4);
	});
});

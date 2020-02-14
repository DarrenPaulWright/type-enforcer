import { applySettings } from '../index.js';
import assert from '../src/assert/assert.js';

describe('applySettings', () => {
	it('should not throw errors if methods are provided that don\'t exist on the target', () => {
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

		assert.notThrows(() => {
			applySettings(target, {
				third: 3,
				fourth: 1,
				fifth: 5,
				sixth: 6
			}, ['fifth', 'seventh'], ['sixth', 'eighth']);
		});
		assert.equal(testVar, 1);
	});

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

		assert.equal(testVar, 3);
	});

	it('should apply settings in order', () => {
		let progress = 0;
		let total = 0;
		const target = {
			first(value) {
				if (value === 1 && progress === 3) {
					progress += 1;
				}
				total++;
			},
			second(value) {
				if (value === 2) {
					progress += 1;
				}
				total++;
			},
			third(value) {
				if (value === 3 && progress === 0) {
					progress += 1;
				}
				total++;
			},
			fourth(value) {
				if (value === 4) {
					progress += 1;
				}
				total++;
			}
		};

		applySettings(target, {
			first: 1,
			second: 2,
			third: 3,
			fourth: 4
		}, ['third'], ['first']);

		assert.equal(progress, 4);
		assert.equal(total, 4);
	});
});

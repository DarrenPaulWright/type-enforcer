import { assert } from 'chai';
import { is } from '../src';
import { multiTest } from './TestUtil';

export default (data, isType) => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isType, is[data.name]);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isType(value);
		},
		assertion: 'isTrue'
	});

	multiTest({
		values: data.false,
		test(value) {
			return isType(value);
		},
		assertion: 'isFalse'
	});

	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isType(value);
		},
		assertion: 'isFalse'
	});

	describe('coerce', () => {
		multiTest({
			values: data.true,
			test(value) {
				return isType(value, true);
			},
			assertion: 'isTrue'
		});

		multiTest({
			values: data.coerceTrue,
			test(value) {
				return isType(value, true);
			},
			assertion: 'isTrue'
		});

		multiTest({
			values: data.coerceFalse,
			test(value) {
				return isType(value, true);
			},
			assertion: 'isFalse'
		});
	});
}

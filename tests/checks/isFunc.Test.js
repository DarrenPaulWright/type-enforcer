import { isFunction } from '../../src';
import { multiTest, functionData as data } from '../TestUtil';

describe('isFunction', () => {
	multiTest({
		values: data.true,
		test: (value) => isFunction(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isFunction(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isFunction(value, true),
		assertion: 'isTrue'
	});
});

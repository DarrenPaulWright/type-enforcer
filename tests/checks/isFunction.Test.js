import { isFunction } from '../../src';
import { functionData as data, multiTest } from '../TestUtil';

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

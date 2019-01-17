import { isFunc } from '../../src';
import { multiTest, functionData as data } from '../TestUtil';

describe('isFunc', () => {
	multiTest({
		values: data.true,
		test: (value) => isFunc(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isFunc(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isFunc(value, true),
		assertion: 'isTrue'
	});
});

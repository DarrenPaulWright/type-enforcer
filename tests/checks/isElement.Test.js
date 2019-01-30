import { isElement } from '../../src';
import { elementData as data, multiTest } from '../TestUtil';

describe('isElement', () => {
	multiTest({
		values: data.true,
		test: (value) => isElement(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isElement(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isElement(value, true),
		assertion: 'isTrue'
	});
});

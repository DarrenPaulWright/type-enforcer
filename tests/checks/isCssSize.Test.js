import { isCssSize } from '../../src';
import { multiTest, cssSizeData as data } from '../TestUtil';

describe('isCssSize', () => {
	multiTest({
		values: data.true,
		test: (value) => isCssSize(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isCssSize(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isCssSize(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isCssSize(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isCssSize(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isCssSize(value, true),
		assertion: 'isFalse'
	});
});

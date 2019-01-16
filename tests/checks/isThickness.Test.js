import { find } from 'lodash';
import { isThickness } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'thickness'});

describe('isThickness', () => {
	multiTest({
		values: data.true,
		test: (value) => isThickness(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isThickness(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isThickness(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isThickness(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isThickness(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isThickness(value, true),
		assertion: 'isFalse'
	});
});

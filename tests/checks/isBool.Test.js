import { find } from 'lodash';
import { isBool } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'bool'});

describe('isBool', () => {
	multiTest({
		values: data.true,
		test: (value) => isBool(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isBool(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isBool(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isBool(value, true),
		assertion: 'isFalse'
	});
});
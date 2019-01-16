import { find } from 'lodash';
import { isPoint } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'point'});

describe('isPoint', () => {
	multiTest({
		values: data.true,
		test: (value) => isPoint(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isPoint(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isPoint(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isPoint(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isPoint(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isPoint(value, true),
		assertion: 'isFalse'
	});
});

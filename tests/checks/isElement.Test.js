import { find } from 'lodash';
import { isElement } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'element'});

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

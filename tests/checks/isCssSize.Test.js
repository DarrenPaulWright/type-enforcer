import { find } from 'lodash';
import { isCssSize } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'cssSize'});

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
});

import { find } from 'lodash';
import { isDockPoint } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'dockPoint'});

describe('isDockPoint', () => {
	multiTest({
		values: data.true,
		test: (value) => isDockPoint(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isDockPoint(value),
		assertion: 'isFalse'
	});
});

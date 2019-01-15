import { assign, find } from 'lodash';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'func'
});

describe('method', () => {
	describe('.func', () => {
		testMethodType(assign({}, data));
	});
});


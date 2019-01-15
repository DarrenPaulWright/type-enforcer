import { assign, find } from 'lodash';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'date'
});

describe('method', () => {
	describe('.date', () => {
		testMethodType(assign({}, data));
	});
});

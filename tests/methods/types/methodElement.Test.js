import { assign, find } from 'lodash';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'element'
});

describe('method', () => {
	describe('.element', () => {
		testMethodType(assign({}, data));
	});
});


import { assign, find } from 'lodash';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'string'
});

describe('method', () => {
	describe('.string', () => {
		testMethodType(assign({}, data, {
			init: ''
		}));
	});
});


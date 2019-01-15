import { assign, find } from 'lodash';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'bool'
});

describe('method', () => {
	describe('.bool', () => {
		testMethodType(assign({}, data, {
			init: false
		}));
	});
});


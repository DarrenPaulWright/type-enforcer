import { assign, find } from 'lodash';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'regExp'
});

describe('method', () => {
	describe('.regExp', () => {
		testMethodType(assign({}, data));
	});
});


import { assign } from 'lodash';
import { dateData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.date', () => {
		testMethodType(assign({}, data));
	});
});

import { assign } from 'lodash';
import { functionData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.function', () => {
		testMethodType(assign({
			coerce: false
		}, data));
	});
});


import { assign } from 'lodash';
import { boolData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.boolean', () => {
		testMethodType(assign({}, data, {
			init: false
		}));
	});
});


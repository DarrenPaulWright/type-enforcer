import { assign } from 'lodash';
import { stringData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.string', () => {
		testMethodType(assign({}, data, {
			init: ''
		}));
	});
});


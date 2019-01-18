import { assign } from 'lodash';
import { regExpData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.regExp', () => {
		testMethodType(assign({}, data));
	});
});


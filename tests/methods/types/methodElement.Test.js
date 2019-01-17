import { assign } from 'lodash';
import { elementData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.element', () => {
		testMethodType(assign({}, data));
	});
});


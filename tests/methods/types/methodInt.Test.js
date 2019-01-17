import { assign } from 'lodash';
import { intData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.int', () => {
		testMethodType(assign({}, data, {
			extraProps: {
				min: 0,
				max: 10
			},
			coerce: [{
				value: 13,
				coerced: 10
			}, {
				value: -3,
				coerced: 0
			}]
		}));
	});
});


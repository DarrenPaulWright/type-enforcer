import { assign, find } from 'lodash';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'int'
});

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


import { assign } from 'lodash';
import { numberData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.number', () => {
		testMethodType(assign({}, data, {
			extraProps: {
				min: 1.2,
				max: 10.5
			},
			coerce: [{
				value: 30.874,
				coerced: 10.5
			}, {
				value: -3,
				coerced: 1.2
			}]
		}));
	});
});


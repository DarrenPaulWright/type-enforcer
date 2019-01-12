import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.number', () => {
		testMethodType({
			methodType: 'number',
			testItem: 1.3,
			testItem2: 2.5,
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
		});
	});
});


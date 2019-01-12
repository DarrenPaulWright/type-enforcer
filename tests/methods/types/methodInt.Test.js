import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.int', () => {
		testMethodType({
			methodType: 'int',
			testItem: 1,
			testItem2: 5,
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
		});
	});
});


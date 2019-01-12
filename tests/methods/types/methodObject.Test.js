import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.object', () => {
		testMethodType({
			methodType: 'object',
			testItem: {
				test: 'test1'
			},
			testItem2: {
				test: 'test2'
			}
		});
	});
});


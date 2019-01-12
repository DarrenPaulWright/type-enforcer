import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.string', () => {
		testMethodType({
			methodType: 'string',
			init: '',
			testItem: 'test1',
			testItem2: 'test2'
		});
	});
});


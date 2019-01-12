import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.array', () => {
		testMethodType({
			methodType: 'array',
			init: [],
			testItem: [{
				id: 1
			}],
			testItem2: [{
				id: 2
			}]
		});
	});
});

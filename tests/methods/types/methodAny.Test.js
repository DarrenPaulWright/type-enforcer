import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.any', () => {
		testMethodType({
			methodType: 'any',
			testItem: 'string',
			testItem2: 123
		});
	});
});

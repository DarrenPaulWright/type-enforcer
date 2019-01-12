import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.date', () => {
		testMethodType({
			methodType: 'date',
			testItem: new Date(),
			testItem2: new Date('2015-07-07')
		});
	});
});

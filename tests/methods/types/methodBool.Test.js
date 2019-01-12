import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.bool', () => {
		testMethodType({
			methodType: 'bool',
			init: false,
			testItem: true,
			testItem2: false
		});
	});
});


import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.element', () => {
		testMethodType({
			methodType: 'element',
			testItem: document.createElement('div'),
			testItem2: document.createElement('span')
		});
	});
});


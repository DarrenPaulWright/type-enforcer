import { validElements } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.element', () => {
		testMethodType({
			methodType: 'element',
			testItem: validElements[0],
			testItem2: validElements[1]
		});
	});
});


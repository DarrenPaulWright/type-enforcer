import { validArrays } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.array', () => {
		testMethodType({
			methodType: 'array',
			init: [],
			testItem: validArrays[0],
			testItem2: validArrays[1]
		});
	});
});

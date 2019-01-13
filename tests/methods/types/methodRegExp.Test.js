import { validRegExps } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.regExp', () => {
		testMethodType({
			methodType: 'regExp',
			testItem: validRegExps[0],
			testItem2: validRegExps[1]
		});
	});
});


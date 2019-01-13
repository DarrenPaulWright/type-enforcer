import { validDates } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.date', () => {
		testMethodType({
			methodType: 'date',
			testItem: validDates[0],
			testItem2: validDates[1]
		});
	});
});

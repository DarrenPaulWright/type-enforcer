import { validCssSizes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.cssSize (stringify)', () => {
		testMethodType({
			methodType: 'cssSize',
			testItem: '14px',
			testItem2: '20px',
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.cssSize', () => {
		testMethodType({
			methodType: 'cssSize',
			testItem: validCssSizes[0],
			testItem2: validCssSizes[1]
		});
	});
});


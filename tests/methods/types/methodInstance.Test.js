import { CssSize } from '../../../src';
import { validCssSizes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.instance', () => {
		testMethodType({
			methodType: 'instance',
			testItem: validCssSizes[0],
			testItem2: validCssSizes[1],
			extraProps: {
				instance: CssSize
			}
		});
	});
});


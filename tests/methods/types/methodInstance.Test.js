import { CssSize } from '../../../src';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.instance', () => {
		testMethodType({
			methodType: 'instance',
			testItem: new CssSize(),
			testItem2: new CssSize('4rem'),
			extraProps: {
				instance: CssSize
			}
		});
	});
});


import { CssSize } from '../../../src';
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
			testItem: new CssSize('14px'),
			testItem2: new CssSize('20px')
		});
	});
});


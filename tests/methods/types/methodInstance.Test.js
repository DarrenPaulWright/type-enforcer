import { CssSize } from '../../../src';
import { validCssSizes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.instance', () => {
		testMethodType({
			name: 'instance',
			true: [validCssSizes[0], validCssSizes[1]],
			extraProps: {
				instance: CssSize
			}
		});
	});
});


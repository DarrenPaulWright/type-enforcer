import { Enum } from '../../../src';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.enum', () => {
		testMethodType({
			name: 'enum',
			true: ['test2', 'test3'],
			extraProps: {
				enum: new Enum({
					test1: 'test1',
					test2: 'test2',
					test3: 'test3'
				})
			}
		});
	});
});


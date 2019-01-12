import { Enum } from '../../../src';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.enum', () => {
		testMethodType({
			methodType: 'enum',
			testItem: 'test2',
			testItem2: 'test3',
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


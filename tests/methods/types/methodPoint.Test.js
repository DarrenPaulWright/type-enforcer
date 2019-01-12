import { Point } from '../../../src';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.point (stringify)', () => {
		testMethodType({
			methodType: 'point',
			init: '0,0',
			testItem: '1,2',
			testItem2: '3,4',
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.point', () => {
		testMethodType({
			methodType: 'point',
			init: new Point(),
			testItem: new Point([1, 2]),
			testItem2: new Point([3, 4]),
			coerce: [{
				value: '5,6',
				coerced: new Point([5, 6])
			}]
		});
	});
});

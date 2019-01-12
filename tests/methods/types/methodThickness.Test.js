import { Thickness } from '../../../src';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.thickness (stringify)', () => {
		testMethodType({
			methodType: 'thickness',
			testItem: '12px',
			testItem2: '20px',
			extraProps: {
				stringify: true
			},
			coerce: [{
				value: '12px 4rem',
				coerced: '12px 64px'
			}, {
				value: 13,
				coerced: '13px'
			}]
		});
	});

	describe('.thickness', () => {
		testMethodType({
			methodType: 'thickness',
			testItem: new Thickness('12px'),
			testItem2: new Thickness('20px'),
			coerce: [{
				value: '12px 4rem',
				coerced: new Thickness('12px 64px')
			}, {
				value: 13,
				coerced: new Thickness('13px')
			}]
		});
	});
});


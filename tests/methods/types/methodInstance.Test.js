import { assert } from 'chai';
import { CssSize, method, methodInstance } from '../../../src';
import { validCssSizes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.instance', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodInstance, method.instance);
		});

		testMethodType({
			name: 'instance',
			true: [validCssSizes[0], validCssSizes[1]],
			coerce: false,
			extraProps: {
				instance: CssSize
			}
		});
	});
});


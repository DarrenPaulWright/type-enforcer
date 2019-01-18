import { assert } from 'chai';
import { assign } from 'lodash';
import { method, Vector } from '../../../src';
import { vectorData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.vector (stringify)', () => {
		testMethodType({
			name: 'vector',
			init: '[[0,0],[0,0]]',
			true: ['[[1,2],[3,4]]', '[[5,6],[7,8]]'],
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.vector', () => {
		testMethodType(assign({}, data, {
			init: new Vector(),
			coerce: [{
				value: '[[3,4],[5,6]]',
				coerced: new Vector('[[3,4],[5,6]]')
			}]
		}));

		it('should NOT save a coercable value if coerce is false', () => {
			const TestConstructor = function() {
				this.testMethod = method.vector({
					init: undefined,
					coerce: false
				});
			};
			const testConstructor = new TestConstructor();

			testConstructor.testMethod('[[1,2],[3,4]]');

			assert.equal(testConstructor.testMethod(), undefined);
		});
	});
});


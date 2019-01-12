import { Vector } from '../../../src';
import { validVectors } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.vector (stringify)', () => {
		testMethodType({
			methodType: 'vector',
			init: '[[0,0],[0,0]]',
			testItem: '[[1,2],[3,4]]',
			testItem2: '[[5,6],[7,8]]',
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.vector', () => {
		testMethodType({
			methodType: 'vector',
			init: new Vector(),
			testItem: validVectors[0],
			testItem2: validVectors[1],
			coerce: [{
				value: '[[3,4],[5,6]]',
				coerced: new Vector('[[3,4],[5,6]]')
			}]
		});
	});
});


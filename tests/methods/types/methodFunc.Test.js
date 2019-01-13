import { validFunctions } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.func', () => {
		testMethodType({
			methodType: 'func',
			testItem: validFunctions[0],
			testItem2: validFunctions[1]
		});
	});
});


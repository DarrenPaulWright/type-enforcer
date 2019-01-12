import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.func', () => {
		testMethodType({
			methodType: 'func',
			testItem: () => {
			},
			testItem2: () => {
			}
		});
	});
});


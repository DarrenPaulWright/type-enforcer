import { describe, it } from 'hippogriff';
import { assert, Enum, is } from '../../index.js';
import AssertionError from './AssertionError.js';

describe('assert', () => {
	const array = [];

	[
		['is', [12, 12], [-0, 0], true],
		['is', [array, array], [{}, {}], true],
		['notIs', [1, 2], [1, 1]],
		['equal', [{ a: 1 }, { a: 1 }], [{ a: 1 }, { a: 2 }], true],
		['notEqual', [{ a: 1 }, { a: 2 }], [{ a: 1 }, { a: 1 }], undefined],
		['moreThan', [2.1, 2], [1, 1], undefined],
		['atLeast', [2, 2], [0, 1], undefined],
		['lessThan', [1, 2], [1, 1], undefined],
		['atMost', [2, 2], [2, 1], undefined],
		['throws', [() => {
			throw new Error('test');
		}], [() => {
			return true;
		}], false],
		['notThrows', [() => {
			return true;
		}], [() => {
			throw new Error('test');
		}], false],
		['array', [[]], [2], false],
		['boolean', [false], [2], false],
		['date', [new Date()], [2], false],
		['float', [4.123], ['lkj'], false],
		['function', [() => {
		}], [2], false],
		['instanceOf', [new Enum({}), Enum], [2, Enum], undefined],
		['integer', [7], [1.2], false],
		['json', ['{"x":3}'], [{ x: 3 }], false],
		['map', [new Map()], [new WeakMap()], false],
		['number', [Infinity], [NaN], false],
		['object', [{}], [new WeakMap()], false],
		['promise', [new Promise(() => {
		})], [() => {
		}], false],
		// eslint-disable-next-line require-unicode-regexp
		['regExp', [/t/], ['test'], false],
		['set', [new Set()], ['test'], false],
		['string', ['test'], [9], false],
		['symbol', [Symbol()], ['test'], false],
		['weakMap', [new WeakMap()], ['test'], false],
		['weakSet', [new WeakSet()], ['test'], false]
	]
		.forEach((data) => {
			describe(data[0], () => {
				it(`should not throw if assert.${ data[0] } passes`, () => {
					assert.notThrows(() => {
						assert[data[0]](...data[1]);
					});
				});

				it(`should throw if assert.${ data[0] } fails`, () => {
					assert.throws(() => {
						assert[data[0]](...data[2]);
					});
				});

				it(`should throw an AssertionError if assert.${ data[0] } fails`, () => {
					try {
						assert[data[0]](...data[2]);
					}
					catch (error) {
						assert.instanceOf(error, AssertionError);
						if (data[3]) {
							assert.is(error.showDiff, true);
							assert.equal(error.actual, data[2][0]);
							assert.equal(error.expected, data[2][1]);
						}
						else {
							assert.equal(error.showDiff, data[3]);
						}
					}
				});
			});
		});

	Object.keys(is).forEach((key) => {
		it(`should have a key "${ key }" from "is"`, () => {
			assert.is(true, key in assert);
		});
	});
});

import { assert, Enum } from '../index.js';
import AssertionError from '../src/assert/AssertionError.js';

describe('assert', () => {
	const array = [];

	[
		['is', [12, 12], [-0, 0], true],
		['is', [array, array], [{}, {}], true],
		['notIs', [1, 2], [1, 1]],
		['equal', [{a: 1}, {a: 1}], [{a: 1}, {a: 2}], true],
		['notEqual', [{a: 1}, {a: 2}], [{a: 1}, {a: 1}]],
		['moreThan', [2.1, 2], [1, 1]],
		['atLeast', [2, 2], [0, 1]],
		['lessThan', [1, 2], [1, 1]],
		['atMost', [2, 2], [2, 1]],
		['throws', [() => {
			throw new Error('test');
		}], [() => {
			return true;
		}]],
		['notThrows', [() => {
			return true;
		}], [() => {
			throw new Error('test');
		}]],
		['array', [[]], [2]],
		['boolean', [false], [2]],
		['date', [new Date()], [2]],
		['float', [4.123], ['lkj']],
		['function', [() => {
		}], [2]],
		['instanceOf', [new Enum({}), Enum], [2, Enum]],
		['integer', [7], [1.2]],
		['json', ['{"x":3}'], [{x: 3}]],
		['map', [new Map()], [new WeakMap()]],
		['number', [Infinity], [NaN]],
		['object', [{}], [new WeakMap()]],
		['promise', [new Promise(() => {
		})], [() => {
		}]],
		['regExp', [/t/], ['test']],
		['set', [new Set()], ['test']],
		['string', ['test'], [9]],
		['symbol', [Symbol()], ['test']],
		['weakMap', [new WeakMap()], ['test']],
		['weakSet', [new WeakSet()], ['test']]
	]
		.forEach((data) => {
			describe(data[0], () => {
				it(`should not throw if assert.${data[0]} passes`, () => {
					assert.notThrows(() => {
						assert[data[0]](...data[1]);
					});
				});

				it(`should throw if assert.${data[0]} fails`, () => {
					assert.throws(() => {
						assert[data[0]](...data[2]);
					});
				});

				it('should throw an AssertionError if the test fails', () => {
					try {
						assert[data[0]](...data[2]);
					}
					catch (e) {
						assert.instanceOf(e, AssertionError);
						if (!data[3]) {
							assert.equal(e.showDiff, undefined);
						}
						else {
							assert.equal(e.showDiff, true);
							assert.equal(e.actual, data[2][0]);
							assert.equal(e.expected, data[2][1]);
						}
					}
				});
			});
		});
});

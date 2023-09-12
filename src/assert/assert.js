import display from 'display-value';
import { deepEqual } from 'object-agent';
import is from '../checks/is.js';
import sameValue from '../equality/sameValue.js';
import AssertionError from './AssertionError.js';

/**
 * Generate an assertion function.
 *
 * @function assertion
 * @private
 *
 * @param {object} settings
 * @param {Function} settings.assert
 * @param {Function} settings.message
 * @param {boolean} [settings.showDiff]
 *
 * @returns {(function(unknown, unknown): void)}
 */
const assertion = ({ assert, message, showDiff }) => {
	return (actual, expected) => {
		if (assert(actual, expected) === false) {
			throw new AssertionError(message(actual, expected), {
				actual,
				expected,
				showDiff
			});
		}
	};
};

/**
 * An assertion library for testing. Assertions do nothing if the test passes, and throw an AssertionError if they fail.
 *
 * @namespace assert
 */
const assert = {
	/**
	 * Check if two values are the same. Uses [sameValue](sameValue.md). Supports diffs in tools that use it.
	 *
	 * @example
	 * ``` javascript
	 * import { assert } from 'type-enforcer';
	 *
	 * assert.is(12, 12);
	 *
	 * assert.is([], []);
	 * // => AssertionError
	 *
	 * const array = [];
	 * assert.is(array, array);
	 * ```
	 *
	 * @function assert.is
	 *
	 * @param {unknown} actual
	 * @param {unknown} expected
	 */
	is: assertion({
		assert: sameValue,
		message: (a, b) => display(a) + ' to be ' + display(b),
		showDiff: true
	}),
	/**
	 * Check if two values are NOT the same. Uses [sameValue](sameValue.md).
	 *
	 * @example
	 * ``` javascript
	 * import { assert } from 'type-enforcer';
	 *
	 * assert.notIs(12, 12);
	 * // => AssertionError
	 *
	 * assert.notIs([], []);
	 *
	 * const array = [];
	 * assert.notIs(array, array);
	 * // => AssertionError
	 * ```
	 *
	 * @function assert.notIs
	 *
	 * @param {unknown} actual
	 * @param {unknown} expected
	 */
	notIs: assertion({
		assert: (a, b) => !sameValue(a, b),
		message: (a, b) => display(a) + ' to not be ' + display(b)
	}),
	/**
	 * Check if two values are deeply equal. Supports diffs in tools that use it.
	 *
	 * @example
	 * ``` javascript
	 * import { assert } from 'type-enforcer';
	 *
	 * assert.equal(12, 12);
	 *
	 * assert.equal([], []);
	 *
	 * assert.equal([1, 2, 3], [1, 2, 4]);
	 * // => AssertionError
	 * ```
	 *
	 * @function assert.equal
	 *
	 * @param {unknown} actual
	 * @param {unknown} expected
	 */
	equal: assertion({
		assert: deepEqual,
		message: (a, b) => display(a) + ' to equal ' + display(b),
		showDiff: true
	}),
	/**
	 * Check if two values are NOT deeply equal.
	 *
	 * @example
	 * ``` javascript
	 * import { assert } from 'type-enforcer';
	 *
	 * assert.notEqual(12, 12);
	 * // => AssertionError
	 *
	 * assert.notEqual([], []);
	 * // => AssertionError
	 *
	 * assert.notEqual([1, 2, 3], [1, 2, 4]);
	 * ```
	 *
	 * @function assert.notEqual
	 *
	 * @param {unknown} actual
	 * @param {unknown} expected
	 */
	notEqual: assertion({
		assert: (a, b) => !deepEqual(a, b),
		message: (a, b) => display(a) + ' to not equal ' + display(b)
	}),
	/**
	 * Check if one value is more than another.
	 *
	 * @example
	 * ``` javascript
	 * import { assert } from 'type-enforcer';
	 *
	 * assert.moreThan(12, 10);
	 *
	 * assert.moreThan(10, 12);
	 * // => AssertionError
	 * ```
	 *
	 * @function assert.moreThan
	 *
	 * @param {unknown} leftOperand
	 * @param {unknown} rightOperand
	 */
	moreThan: assertion({
		assert: (a, b) => a > b,
		message: (a, b) => display(a) + ' to be more than ' + display(b)
	}),
	/**
	 * Check if one value is at least as much as another.
	 *
	 * @example
	 * ``` javascript
	 * import { assert } from 'type-enforcer';
	 *
	 * assert.atLeast(10, 10);
	 *
	 * assert.atLeast(10, 12);
	 * // => AssertionError
	 * ```
	 *
	 * @function assert.atLeast
	 *
	 * @param {unknown} leftOperand
	 * @param {unknown} rightOperand
	 */
	atLeast: assertion({
		assert: (a, b) => a >= b,
		message: (a, b) => display(a) + ' to be at least ' + display(b)
	}),
	/**
	 * Check if one value is less than another.
	 *
	 * @example
	 * ``` javascript
	 * import { assert } from 'type-enforcer';
	 *
	 * assert.lessThan(10, 12);
	 *
	 * assert.lessThan(12, 10);
	 * // => AssertionError
	 * ```
	 *
	 * @function assert.lessThan
	 *
	 * @param {unknown} leftOperand
	 * @param {unknown} rightOperand
	 */
	lessThan: assertion({
		assert: (a, b) => a < b,
		message: (a, b) => display(a) + ' to be less than ' + display(b)
	}),
	/**
	 * Check if one value is at most as much as another.
	 *
	 * @example
	 * ``` javascript
	 * import { assert } from 'type-enforcer';
	 *
	 * assert.atMost(10, 10);
	 *
	 * assert.atMost(10, 12);
	 * // => AssertionError
	 * ```
	 *
	 * @function assert.atMost
	 *
	 * @param {unknown} leftOperand
	 * @param {unknown} rightOperand
	 */
	atMost: assertion({
		assert: (a, b) => a <= b,
		message: (a, b) => display(a) + ' to be at most ' + display(b)
	}),
	/**
	 * Check if the provided function throws an error.
	 *
	 * @function assert.throws
	 *
	 * @param {Function} function
	 */
	throws: assertion({
		assert: (a) => {
			try {
				a();
				return false;
			}
			catch (error) {
				return true;
			}
		},
		message: () => 'to throw'
	}),
	/**
	 * Check if the provided function doesn't throw an error.
	 *
	 * @function assert.notThrows
	 *
	 * @param {Function} function
	 */
	notThrows: assertion({
		assert: (a) => {
			try {
				a();
				return true;
			}
			catch (error) {
				return false;
			}
		},
		message: () => 'to not throw'
	}),

	/**
	 * Check if a value is an [array](is.md#array).
	 *
	 * @function assert.array
	 *
	 * @param {unknown} actual
	 */
	array: assertion({
		assert: is.array,
		message: (a) => `${ display(a) } to be an array`
	}),

	/**
	 * Check if a value is a [boolean](is.md#boolean).
	 *
	 * @function assert.boolean
	 *
	 * @param {unknown} actual
	 */
	boolean: assertion({
		assert: is.boolean,
		message: (a) => `${ display(a) } to be a boolean`
	}),

	/**
	 * Check if a value is a [date](is.md#date).
	 *
	 * @function assert.date
	 *
	 * @param {unknown} actual
	 */
	date: assertion({
		assert: is.date,
		message: (a) => `${ display(a) } to be a date`
	}),

	/**
	 * Check if a value is a [float](is.md#float).
	 *
	 * @function assert.float
	 *
	 * @param {unknown} actual
	 */
	float: assertion({
		assert: is.float,
		message: (a) => `${ display(a) } to be a float`
	}),

	/**
	 * Check if a value is a [function](is.md#function).
	 *
	 * @function assert.function
	 *
	 * @param {unknown} actual
	 */
	function: assertion({
		assert: is.function,
		message: (a) => `${ display(a) } to be a function`
	}),

	/**
	 * Check if a value is an [instanceOf](is.md#instanceOf) a constructor.
	 *
	 * @function assert.instanceOf
	 *
	 * @param {unknown} actual
	 * @param {Function} constructor
	 */
	instanceOf: assertion({
		assert: is.instanceOf,
		message: (a, b) => `${ display(a) } to be an instance of ${ display(b) }`
	}),

	/**
	 * Check if a value is an [integer](is.md#integer).
	 *
	 * @function assert.integer
	 *
	 * @param {unknown} actual
	 */
	integer: assertion({
		assert: is.integer,
		message: (a) => `${ display(a) } to be an integer`
	}),

	/**
	 * Check if a value is [json](is.md#json).
	 *
	 * @function assert.json
	 *
	 * @param {unknown} actual
	 */
	json: assertion({
		assert: is.json,
		message: (a) => `${ display(a) } to be json`
	}),

	/**
	 * Check if a value is a [Map](is.md#map).
	 *
	 * @function assert.map
	 *
	 * @param {unknown} actual
	 */
	map: assertion({
		assert: is.map,
		message: (a) => `${ display(a) } to be a map`
	}),

	/**
	 * Check if a value is a [number](is.md#number).
	 *
	 * @function assert.number
	 *
	 * @param {unknown} actual
	 */
	number: assertion({
		assert: is.number,
		message: (a) => `${ display(a) } to be a number`
	}),

	/**
	 * Check if a value is an [object](is.md#object).
	 *
	 * @function assert.object
	 *
	 * @param {unknown} actual
	 */
	object: assertion({
		assert: is.object,
		message: (a) => `${ display(a) } to be an object`
	}),

	/**
	 * Check if a value is a [Promise](is.md#promise).
	 *
	 * @function assert.promise
	 *
	 * @param {unknown} actual
	 */
	promise: assertion({
		assert: is.promise,
		message: (a) => `${ display(a) } to be a promise`
	}),

	/**
	 * Check if a value is a [RegExp](is.md#regExp).
	 *
	 * @function assert.regExp
	 *
	 * @param {unknown} actual
	 */
	regExp: assertion({
		assert: is.regExp,
		message: (a) => `${ display(a) } to be a regExp`
	}),

	/**
	 * Check if a value is a [Set](is.md#set).
	 *
	 * @function assert.set
	 *
	 * @param {unknown} actual
	 */
	set: assertion({
		assert: is.set,
		message: (a) => `${ display(a) } to be a Set`
	}),

	/**
	 * Check if a value is a [string](is.md#string).
	 *
	 * @function assert.string
	 *
	 * @param {unknown} actual
	 */
	string: assertion({
		assert: is.string,
		message: (a) => `${ display(a) } to be a string`
	}),

	/**
	 * Check if a value is a [Symbol](is.md#symbol).
	 *
	 * @function assert.symbol
	 *
	 * @param {unknown} actual
	 */
	symbol: assertion({
		assert: is.symbol,
		message: (a) => `${ display(a) } to be a Symbol`
	}),

	/**
	 * Check if a value is a [WeakMap](is.md#weakMap).
	 *
	 * @function assert.weakMap
	 *
	 * @param {unknown} actual
	 */
	weakMap: assertion({
		assert: is.weakMap(),
		message: (a) => `${ display(a) } to be a WeakMap`
	}),

	/**
	 * Check if a value is a [WeakSet](is.md#weakSet).
	 *
	 * @function assert.weakSet
	 *
	 * @param {unknown} actual
	 */
	weakSet: assertion({
		assert: is.weakSet,
		message: (a) => `${ display(a) } to be a WeakSet`
	})
};

export default assert;

/**
 * Performs a SameValueZero equality check between two values.
 *
 * @see [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality)
 *
 * @function sameValueZero
 *
 * @param {*} a - A value to test.
 * @param {*} b - Another value to test.
 *
 * @returns {boolean}
 */
export default (a, b) => a === b || (a !== a && b !== b); // eslint-disable-line no-self-compare

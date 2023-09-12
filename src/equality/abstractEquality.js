/**
 * Performs an abstract equality check (==) between two values.
 *
 * @see [Loose Equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using)
 *
 * @function abstractEquality
 *
 * @param {unknown} a - A value to test.
 * @param {unknown} b - Another value to test.
 *
 * @returns {boolean}
 */
export default (a, b) => a == b; // eslint-disable-line eqeqeq

/**
 * Performs a SameValueZero equality check between two values.
 *
 * @see [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality)
 *
 * @function sameValueZero
 *
 * @arg a
 * @arg b
 *
 * @returns {boolean}
 */
export default (a, b) => a === b || (a !== a && b !== b);

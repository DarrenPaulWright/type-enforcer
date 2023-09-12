/**
 * Performs a SameValue equality check (Object.is) between two values.
 *
 * @see [SameValue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value_equality)
 *
 * @function sameValue
 *
 * @param {unknown} a - A value to test.
 * @param {unknown} b - Another value to test.
 *
 * @returns {boolean}
 */
export default Object.is;

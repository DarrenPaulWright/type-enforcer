import { isRegExp } from 'lodash';

/**
 * Check if a value is a [RegExp]{@link https://lodash.com/docs/#isRegExp}
 *
 * @example
 * ``` javascript
 * import { isRegExp } from 'type-enforcer';
 *
 * isRegExp(/*+/g);
 * // => true
 * ```
 *
 * @function isRegExp
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => isRegExp(value);

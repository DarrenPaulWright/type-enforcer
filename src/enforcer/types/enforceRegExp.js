import { isRegExp } from 'lodash';

/**
 * If the first value is a [RegExp]{@link https://lodash.com/docs/#isRegExp} then return that, otherwise return the alt value.
 *
 * @function enforce.regExp
 *
 * @arg   {*} value
 * @arg   {RegExp} alt
 *
 * @returns {RegExp}
 */
export default (value, alt) => isRegExp(value) ? value : alt;

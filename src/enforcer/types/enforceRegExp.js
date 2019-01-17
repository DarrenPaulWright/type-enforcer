import isRegExp from '../../checks/isRegExp';
import enforcer from './enforcer';

const SEPARATOR = '/';

/**
 * If the first value is a [RegExp]{@link https://lodash.com/docs/#isRegExp} then return that, otherwise return the alt value.
 *
 * @function enforce.regExp
 *
 * @arg {*} value
 * @arg {RegExp} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {RegExp}
 */
export default enforcer(isRegExp, (value) => {
	if (value.charAt(0) !== SEPARATOR) {
		return RegExp(value)
	}
	else {
		const index = value.lastIndexOf(SEPARATOR);
		return RegExp(value.substring(1, index), value.substring(index + 1))
	}
});

import isElement from '../../checks/isElement';
import enforcer from './enforcer';

/**
 * If the first value is a [DOM element]{@link https://lodash.com/docs/#isElement} then return that, otherwise return the alt value.
 *
 * @function enforce.element
 *
 * @arg {*} value
 * @arg {Element} alt
 *
 * @returns {Element}
 */
export default enforcer(isElement);

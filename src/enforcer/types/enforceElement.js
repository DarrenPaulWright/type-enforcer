import isElement from '../../checks/isElement';
import enforcer from './enforcer';

/**
 * Enforce that a value is a DOM element. Uses [isElement](docs/checks.md#isElement).
 *
 * @function enforce.element
 *
 * @arg {*} value
 * @arg {Element} alt - Returned if the value is not the correct type
 *
 * @returns {Element}
 */
export default enforcer(isElement);

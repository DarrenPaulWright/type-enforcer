import { isElement } from 'lodash';

/**
 * If the first value is a DOM element then return that, otherwise return the second value.
 *
 * @function enforce.element
 *
 * @param   {Element} setterValue
 * @param   {Element} defaultValue
 *
 * @returns {Element}
 */
export default (setterValue, defaultValue) => isElement(setterValue) ? setterValue : defaultValue;

import { isElement } from 'lodash';

/**
 * If the first value is a DOM element then return that, otherwise return the alt value.
 *
 * @function enforce.element
 *
 * @arg   {Element} value
 * @arg   {Element} alt
 *
 * @returns {Element}
 */
export default (value, alt) => isElement(value) ? value : alt;

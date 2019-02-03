/**
 * Check if a value is a DOM element
 *
 * @example
 * ``` javascript
 * import { isElement } from 'type-enforcer';
 *
 * isElement(document.createElement('div'));
 * // => true
 * ```
 *
 * @function isElement
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => !!value && typeof value === 'object' && value.nodeType === 1;

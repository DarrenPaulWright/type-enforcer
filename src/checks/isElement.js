import { isElement } from 'lodash';

/**
 * Check if a value is a [DOM element]{@link https://lodash.com/docs/#isElement}
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
 * @arg   {*} value
 *
 * @returns {Boolean}
 */
export default (value) => isElement(value);

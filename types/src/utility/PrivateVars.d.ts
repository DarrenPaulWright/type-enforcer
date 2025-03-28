/**
 * @example
 * ``` javascript
 * import { PrivateVars } from 'type-enforcer';
 *
 * const _ = new PrivateVars();
 *
 * class Widget {
 *     constructor() {
 *         _.set(this);
 *     }
 *
 *     foo(bar) {
 *         if (bar) {
 *             _(this).bar = bar;
 *
 *             return this;
 *         }
 *
 *         return _(this).bar;
 *     }
 * }
 *
 * const widget = new Widget();
 *
 * widget.foo('something');
 *
 * widget.foo();
 * // => 'something'
 * ```
 *
 * @class PrivateVars
 * @classdesc A thin wrapper over WeakMap for storing private variables
 *
 * @returns {Function} Gets a value from a WeakMap if a key is provided
 */
export default class PrivateVars {
}

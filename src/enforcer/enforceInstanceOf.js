import isInstanceOf from '../checks/isInstanceOf.js';

/**
 * Enforce that a value is an instance of a constructor. Uses [isInstanceOf](docs/checks.md#isInstanceOf).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * class A {};
 * class C {};
 *
 * const a = new A();
 * const b = new A();
 * const c = new C();
 *
 * enforce.instanceOf(b, A, a);
 *  => b
 *
 * enforce.instanceOf(c, A, a);
 *  => a
 * ```
 *
 * @function enforce.instanceOf
 * @alias enforceInstanceOf
 *
 * @param {unknown} value - The value to enforce.
 * @param {Function} constructor - A constructor function.
 * @param {object} alt - Returned if the value is not the correct type.
 *
 * @returns {object}
 */
export default (value, constructor, alt) => isInstanceOf(value, constructor) ? value : alt;

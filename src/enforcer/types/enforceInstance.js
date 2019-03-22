import { isInstanceOf } from '../../index';

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
 * enforce.instance(b, A, a);
 *  => b
 *
 * enforce.instance(c, A, a);
 *  => a
 * ```
 *
 * @function enforce.instance
 * @alias enforceInstance
 *
 * @arg {*} value
 * @arg {Function} constructor
 * @arg {Object} alt - Returned if the value is not the correct type
 *
 * @returns {Object}
 */
export default (value, constructor, alt) => isInstanceOf(value, constructor) ? value : alt;

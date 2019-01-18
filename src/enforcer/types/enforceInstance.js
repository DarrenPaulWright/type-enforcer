import { isInstanceOf } from '../../index';

/**
 * Enforce that a value is an instance of a constructor. Uses [isInstanceOf](docs/checks.md#isInstanceOf).
 *
 * @function enforce.instance
 *
 * @arg {*} value
 * @arg {Function} constructor
 * @arg {Object} alt - Returned if the value is not the correct type
 *
 * @returns {Object}
 */
export default (value, constructor, alt) => isInstanceOf(value, constructor) ? value : alt;

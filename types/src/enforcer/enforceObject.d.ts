export type checkFunction = () => any;
export type coerceFunction = () => any;
/**
 * @function enforcer
 * @private
 *
 * @template T
 * @param {unknown} value
 * @param {T} alt
 * @param {boolean} [coerce=false]
 *
 * @returns {T}
 */
/**
 * @callback checkFunction
 * @private
 * @param {unknown} value
 * @returns {boolean}
 */
/**
 * @callback coerceFunction
 * @private
 * @param {unknown} value
 * @returns {unknown}
 */
/**
 * @function simpleEnforcer
 * @private
 *
 * @param {checkFunction} check
 * @param {coerceFunction} doCoercion
 *
 * @returns {enforcer}
 */
declare type simpleEnforcer = {
	(value: unknown, alt: Object, coerce?: boolean): Object;

	extend: (check: checkFunction, doCoercion: coerceFunction) => simpleEnforcer;
}

const _default: simpleEnforcer;

export default _default;

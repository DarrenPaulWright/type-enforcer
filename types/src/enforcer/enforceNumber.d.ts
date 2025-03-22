declare type func = {
	(value: unknown, alt: Number, coerce?: boolean, minValue?: number, maxValue?: number): number;

	extend: (extendedCheck: Function, extendedDoCoercion: Function) => _default;
}
declare const _default: func;
export default _default;

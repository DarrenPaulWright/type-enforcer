declare function _default<T>(
	target: T,
	settings: { [key: string]: unknown },
	priority?: Array<keyof T>,
	deferred?: Array<keyof T>
): void;

export default _default;

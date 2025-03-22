declare type EnumInput = {
	[key: string]: string | number;
}

export default class Enum<Type extends EnumInput> {
	constructor(object: Type);

	/**
	 * Check if a provided value is in this enum.
	 */
	has(value: Type[keyof Type]): boolean;

	/**
	 * Get the key of a provided value.
	 */
	key(value: keyof Type): string | undefined;

	/**
	 * Calls a callback with each of the enum values.
	 * ``` javascript
	 * const items = new Enum({
	 *     THING: 'thing'
	 * });
	 *
	 * items.each((value) => {
	 *     console.log(value);
	 * });
	 * // => 'thing'
	 * ```
	 */
	each(callback: (value: Type[keyof Type]) => void): void;
}

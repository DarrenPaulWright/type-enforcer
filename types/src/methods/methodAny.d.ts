export type IMethodSettings<DataType, Self extends object> = {
	init?: DataType | undefined;

	before?(this: Self, value: DataType | undefined): void;

	set?(this: Self, value: DataType): void;

	get?(this: Self): DataType;

	enforce?: (value: unknown, alt: DataType, coerce?: boolean) => DataType;
	compare?: (newValue: unknown, value: DataType) => boolean;
	stringify?: boolean;
	other?: unknown;
}

export type BuildMethod<DataType, Self extends object, Options> = {
	(settings?: Options): {
		(value: DataType, isForcedSave?: boolean): Self;

		(): DataType;
	};

	bindCallback<T extends Function>(callback: T, self: object): T;

	defaults(options: Options): void;

	extend<NewType, NewOptions extends IMethodSettings<NewType, Self>>(
		options?: NewOptions,
		newOnInit?: NewType
	): BuildMethod<NewType, Self, NewOptions>;
}

declare function _default<Self extends object>(settings: IMethodSettings<unknown, Self>): BuildMethod<unknown, Self, IMethodSettings<unknown, Self>>;

export default _default;

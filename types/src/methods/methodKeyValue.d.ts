declare interface IMethodSettings<DataType, Self extends object> {
	set?(this: Self, key: keyof DataType, value: DataType[keyof DataType]): void;

	get?(this: Self, value: keyof DataType): DataType[keyof DataType];
}

declare function _default<Self extends object, DataType>(settings?: IMethodSettings<DataType, Self>): {
	(value: DataType): Self;
	(key: keyof DataType, value: DataType[keyof DataType]): Self;
	(key: keyof DataType): DataType[keyof DataType];
};

export default _default;

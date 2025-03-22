declare function _default<Self extends object, DataType>(settings?: IMethodSettings<DataType, Self>): {
	(value: DataType, isForcedSave?: boolean): Self;

	(): DataType;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

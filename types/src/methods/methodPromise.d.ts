declare function _default<Self extends object, DataType>(settings?: IMethodSettings<Promise<DataType>, Self>): {
	(value: Promise<DataType>, isForcedSave?: boolean): Self;

	(): Promise<DataType>;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

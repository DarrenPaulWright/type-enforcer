declare function _default<Self extends object, DataType>(settings?: IMethodSettings<Array<DataType>, Self>): {
	(value: Array<DataType>, isForcedSave?: boolean): Self;

	(): Array<DataType>;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

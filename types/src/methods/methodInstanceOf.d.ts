declare interface IInstanceOfMethodSettings<DataType, Self extends object> extends IMethodSettings<DataType, Self> {
	instanceOf?: Function;
}

declare function _default<Self, DataType>(settings?: IInstanceOfMethodSettings<DataType, Self>): {
	(value: DataType, isForcedSave?: boolean): Self;

	(): DataType;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

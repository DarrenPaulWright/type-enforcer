declare interface IEnumMethodSettings<DataType, Self extends object> extends IMethodSettings<DataType, Self> {
	enum: Enum;
}

declare type EnumValues = string | number;

declare function _default<Self extends object>(settings?: IEnumMethodSettings<EnumValues, Self>): {
	(value: EnumValues, isForcedSave?: boolean): Self;

	(): EnumValues;
};

export default _default;
import Enum from '../Enum.js';
import { IMethodSettings } from './methodAny.js';

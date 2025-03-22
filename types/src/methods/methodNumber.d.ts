export interface INumericMethodSettings<DataType, Self extends object> extends IMethodSettings<DataType, Self> {
	min?: number;
	max?: number;
}

declare function _default<Self extends object>(settings?: INumericMethodSettings<number, Self>): {
	(value: number, isForcedSave?: boolean): Self;

	(): number;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

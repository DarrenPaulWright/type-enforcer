declare function _default<Self extends object>(settings?: INumericMethodSettings<number, Self>): {
	(value: number, isForcedSave?: boolean): Self;

	(): number;
};

export default _default;
import { INumericMethodSettings } from './methodNumber.js';

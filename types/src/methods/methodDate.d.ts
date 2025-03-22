declare function _default<Self extends object>(settings?: IMethodSettings<Date, Self>): {
	(value: Date, isForcedSave?: boolean): Self;

	(): Date;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

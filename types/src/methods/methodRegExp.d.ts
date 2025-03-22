declare function _default<Self extends object>(settings?: IMethodSettings<RegExp, Self>): {
	(value: RegExp, isForcedSave?: boolean): Self;

	(): RegExp;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

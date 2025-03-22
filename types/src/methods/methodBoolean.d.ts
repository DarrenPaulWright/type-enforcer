declare function _default<Self extends object>(settings?: IMethodSettings<boolean, Self>): {
	(value: boolean, isForcedSave?: boolean): Self;

	(): boolean;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

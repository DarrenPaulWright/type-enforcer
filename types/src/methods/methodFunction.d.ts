declare function _default<Self extends object, Values extends Array<unknown>>(
	settings?: IMethodSettings<(...args: Values) => void, Self>
): {
	(value: ((...args: Values) => void), isForcedSave?: boolean): Self;

	(): ((...args: Values) => void);
};

export default _default;
import { IMethodSettings } from './methodAny.js';

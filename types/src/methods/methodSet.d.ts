declare function _default<Self extends object, T>(settings?: IMethodSettings<Set<T>, Self>): {
	(value: Set<T>, isForcedSave?: boolean): Self;

	(): Set<T>;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

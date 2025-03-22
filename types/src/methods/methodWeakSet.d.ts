declare function _default<Self extends object, K extends WeakKey>(settings?: IMethodSettings<WeakSet<K>, Self>): {
	(value: WeakSet<K>, isForcedSave?: boolean): Self;

	(): WeakSet<K>;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

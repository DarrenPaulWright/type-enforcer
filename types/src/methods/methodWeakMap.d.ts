declare function _default<Self extends object, K extends WeakKey, V>(settings?: IMethodSettings<WeakMap<K, V>, Self>): {
	(value: WeakMap<K, V>, isForcedSave?: boolean): Self;

	(): WeakMap<K, V>;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

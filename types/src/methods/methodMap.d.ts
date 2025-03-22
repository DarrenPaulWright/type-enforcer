declare function _default<Self extends object, K, V>(settings?: IMethodSettings<Map<K, V>, Self>): {
	(value: Map<K, V>, isForcedSave?: boolean): Self;

	(): Map<K, V>;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

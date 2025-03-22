declare function _default<Self extends object>(settings?: IMethodSettings<string, Self>): {
	(value: string, isForcedSave?: boolean): Self;

	(): string;
};

export default _default;
import { BuildMethod, IMethodSettings } from './methodAny.js';

declare function _default<Self extends object>(settings?: IMethodSettings<Symbol, Self>): {
	(value: Symbol, isForcedSave?: boolean): Self;

	(): Symbol;
};

export default _default;
import { IMethodSettings } from './methodAny.js';

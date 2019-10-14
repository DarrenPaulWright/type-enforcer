import isVector from '../../checks/types/isVector';
import enforceVector from '../../enforcer/types/enforceVector';
import sameValueZero from '../../equality/sameValueZero';
import Vector from '../../types/Vector';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting a [Vector](docs/Vector.md)
 *
 * @function method.vector
 * @extends method.any
 * @alias methodVector
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {*} [options.init=Vector]
 * @arg {Function} [options.enforce=enforce.vector]
 * @arg {Function} [options.compare=Vector.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodAny.extend({
	init: new Vector(),
	enforce: (newValue, oldValue, options) => {
		return enforceVector(newValue, oldValue, options.coerce);
	},
	compare: (newValue, oldValue) => {
		if (isVector(oldValue)) {
			return !oldValue.isSame(newValue);
		}
		if (isVector(newValue)) {
			return !newValue.isSame(oldValue);
		}

		return !sameValueZero(newValue, oldValue);
	},
	coerce: true
});

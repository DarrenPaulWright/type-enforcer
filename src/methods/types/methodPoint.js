import isPoint from '../../checks/types/isPoint';
import enforcePoint from '../../enforcer/types/enforcePoint';
import sameValueZero from '../../equality/sameValueZero';
import Point from '../../types/Point';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting a [Point](docs/Point.md)
 *
 * @function method.point
 * @extends method.any
 * @alias methodPoint
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {*} [options.init=Point]
 * @arg {Function} [options.enforce=enforce.point]
 * @arg {Function} [options.compare=Point.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodAny.extend({
	init: new Point(),
	enforce: (newValue, oldValue, options) => {
		return enforcePoint(newValue, oldValue, options.coerce);
	},
	compare: (newValue, oldValue) => {
		if (isPoint(oldValue)) {
			return !oldValue.isSame(newValue);
		}
		if (isPoint(newValue)) {
			return !newValue.isSame(oldValue);
		}

		return !sameValueZero(newValue, oldValue);
	},
	coerce: true
});

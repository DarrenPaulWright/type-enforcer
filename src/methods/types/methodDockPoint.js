import isDockPoint from '../../checks/types/isDockPoint';
import enforceDockPoint from '../../enforcer/types/enforceDockPoint';
import sameValueZero from '../../equality/sameValueZero';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting a [DockPoint](docs/DockPoint.md)
 *
 * @function method.dockPoint
 * @extends method.any
 * @alias methodDockPoint
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.dockPoint]
 * @arg {Function} [options.compare=DockPoint.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce: (newValue, oldValue, options) => {
		return enforceDockPoint(newValue, oldValue, options.coerce);
	},
	compare: (newValue, oldValue) => {
		if (isDockPoint(oldValue)) {
			return !oldValue.isSame(newValue);
		}
		if (isDockPoint(newValue)) {
			return !newValue.isSame(oldValue);
		}

		return !sameValueZero(newValue, oldValue);
	},
	coerce: true
});

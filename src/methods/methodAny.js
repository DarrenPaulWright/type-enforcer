import { clone } from 'object-agent';
import isArray from '../checks/isArray';
import isInstanceOf from '../checks/isInstanceOf';
import isString from '../checks/isString';
import PrivateVars from '../utility/PrivateVars';

export const _ = new PrivateVars();

const buildMethod = (defaultSettings = {}, onInit) => {
	const method = (options) => {
		const key = Symbol();
		const bindCallback = (callback, self) => {
			if (isString(callback) || typeof callback === 'symbol') {
				callback = self[callback];
			}

			return callback ? callback.bind(self) : undefined;
		};

		options = {
			...clone(defaultSettings),
			...options
		};
		if (onInit) {
			onInit(options);
		}

		if ('other' in options && !isArray(options.other)) {
			options.other = [options.other];
		}

		return function(newValue, isForcedSave = false) {
			let value;
			let _self = _(this) || _.set(this);

			if (!_self[key]) {
				_self[key] = {
					value: options.init,
					enforce: bindCallback(options.enforce, this),
					compare: bindCallback(options.compare, this),
					before: bindCallback(options.before, this),
					get: bindCallback(options.get, this),
					set: bindCallback(options.set, this)
				};
			}

			if (_self[key].get !== undefined) {
				value = _self[key].get();
			}
			else {
				value = _self[key].value;
			}

			if (arguments.length) {
				if (!options.other || !options.other.some((value) => newValue === value || isInstanceOf(newValue, value))) {
					newValue = _self[key].enforce(newValue, value, options);
				}

				if (_self[key].compare(newValue, value) || isForcedSave) {
					if (_self[key].before !== undefined) {
						_self[key].before(value);
					}
					if (_self[key].get === undefined) {
						_self[key].value = newValue;
					}
					if (_self[key].set !== undefined) {
						_self[key].set(newValue);
					}
				}

				return this;
			}

			return (options.stringify && value && value.toString) ? value.toString() : value;
		};
	};

	method.defaults = (settings) => {
		defaultSettings = {
			...defaultSettings,
			...settings
		};
	};

	method.extend = (newSettings = {}, newOnInit) => {
		return buildMethod({
			...defaultSettings,
			...newSettings
		}, newOnInit || onInit);
	};

	return method;
};

/**
 * Builds a chainable method for getting/setting any data type
 *
 * @example
 * ``` javascript
 * import { method } from 'type-enforcer';
 *
 * const Widget = function() {
 *     someMethod = method.any({
 *         set(newValue) {
 *             console.log(this);
 *             console.log(newValue);
 *         }
 *     });
 *     anotherMethod = method.any();
 *     thirdMethod = method.any({
 *         get(newValue) {
 *             return 'item 2';
 *         }
 *     });
 * };
 *
 * const widget = new Widget();
 *
 * widget.someMethod('a').anotherMethod(42).thirdMethod('item 1');
 * // => console.log widget and 'a'
 *
 * widget.someMethod();
 * // => 'a'
 *
 * widget.anotherMethod();
 * // => 42
 *
 * widget.thirdMethod();
 * // => 'item 2'
 * ```
 *
 * @function method.any
 * @alias methodAny
 *
 * @arg {Object}   [options]
 * @arg {*} [options.init] - The initial value
 * @arg {Function} [options.enforce] - Enforce this data type
 * @arg {Function} [options.compare] - Compares a new value to the current value. Return true if the two values are different.
 * @arg {Function} [options.before] - Called before a new valid value is set. Provides the prior value, sets the context to the methods constructor.
 * @arg {Function} [options.set] - Called after a new valid value is set. Provides the new value, sets the context to the methods constructor.
 * @arg {Function} [options.get] - Called to get the value, sets the context to the methods constructor.
 * @arg {Array|*}  [options.other] - Another value/type or array of other values/types that can be set
 * @arg {Boolean}  [options.stringify=false] - If true, then call toString() on the value before returning it (if the value has a toString method)
 *
 * @returns {Function} if a "before" or "set" option is set, then this function accepts two args: a new value and forceSave override. If no args are provided then the current value is returned. If neither "before" nor "set" is set, then only one arg is accepted, the new value. Also returns the current value if no args are provided.
 */
export default buildMethod({
	enforce(newValue) {
		return newValue;
	},
	compare(newValue, oldValue) {
		return newValue !== oldValue;
	}
});

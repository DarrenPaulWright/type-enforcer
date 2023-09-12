import { clone } from 'object-agent';
import isFunction from '../checks/isFunction.js';
import isInstanceOf from '../checks/isInstanceOf.js';
// eslint-disable-next-line unicorn/prevent-abbreviations
import PrivateVars from '../utility/PrivateVars.js';

export const _ = new PrivateVars();

const hasOther = (newValue, other) => {
	for (let index = 0; index < other.length; index++) {
		if (newValue === other[index] || isInstanceOf(newValue, other[index])) {
			return true;
		}
	}
};

const buildMethod = (defaultOptions, onInit) => {
	const method = (options) => {
		const key = Symbol();

		options = Object.assign({}, defaultOptions, options);

		if ('other' in options && !Array.isArray(options.other)) {
			options.other = [options.other];
		}

		if (onInit !== undefined) {
			onInit(options);
		}

		return function(newValue, isForcedSave) {
			const self = this;
			let _self = _(self) || _.set(self);

			if (!_self[key]) {
				_self[key] = {
					value: options.init ? clone(options.init) : options.init,
					enforce: method.bindCallback(options.enforce, self),
					compare: method.bindCallback(options.compare, self),
					before: method.bindCallback(options.before, self),
					get: method.bindCallback(options.get, self),
					set: method.bindCallback(options.set, self)
				};
			}

			const value = _self[key].get ? _self[key].get() : _self[key].value;

			if (arguments.length !== 0) {
				_self = _self[key];

				if (!options.other || !hasOther(newValue, options.other)) {
					newValue = _self.enforce(newValue, value, options);
				}

				if (_self.compare(newValue, value) || isForcedSave) {
					if (_self.before !== false) {
						_self.before(value);
					}
					if (_self.get === false) {
						_self.value = newValue;
					}
					if (_self.set !== false) {
						_self.set(newValue);
					}
				}

				return self;
			}

			return (options.stringify && value && value.toString) ? value.toString() : value;
		};
	};

	method.bindCallback = (callback, self) => {
		return callback ? (isFunction(callback) ? callback : self[callback]).bind(self) : false;
	};

	method.defaults = (options) => {
		Object.assign(defaultOptions, options);
	};

	method.extend = (options = {}, newOnInit = null) => {
		return buildMethod(Object.assign({}, defaultOptions, options), newOnInit || onInit);
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
 * @param {object}   [options]
 * @param {unknown} [options.init] - The initial value
 * @param {Function | string | symbol} [options.enforce] - Enforce this data type.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name.
 * @param {Function | string | symbol} [options.compare] - Compares a new value to the current value. Return true if the two values are different.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name.
 * @param {Function | string | symbol} [options.before] - Called before a new valid value is set. Provides the prior value.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name.
 * @param {Function | string | symbol} [options.set] - Called after a new valid value is set. Provides the new value.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name.
 * @param {Function | string | symbol} [options.get] - Called to get the value.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name.
 * @param {Array|unknown}  [options.other] - Another value/type or array of other values/types that can be set
 * @param {boolean}  [options.stringify=false] - If true, then call toString() on the value before returning it (if the value has a toString method)
 *
 * @returns {Function} if a "before" or "set" option is set, then this function accepts two args: a new value and forceSave override. If no args are provided then the current value is returned. If neither "before" nor "set" is set, then only one arg is accepted, the new value. Also returns the current value if no args are provided.
 */
export default buildMethod({
	enforce: (newValue) => newValue,
	compare: (newValue, oldValue) => newValue !== oldValue
});

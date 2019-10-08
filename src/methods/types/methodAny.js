import { clone, deepEqual } from 'object-agent';
import isArray from '../../checks/types/isArray';
import isInstanceOf from '../../checks/types/isInstanceOf';
import enforceBoolean from '../../enforcer/types/enforceBoolean';
import PrivateVars from '../../utility/PrivateVars';

export const _ = new PrivateVars();

const notEnforced = (newValue) => newValue;

const simpleCompare = (newValue, oldValue) => newValue !== oldValue;

export const deepCompare = (newValue, oldValue) => !deepEqual(newValue, oldValue, {strict: true});

export const compareCustomType = (Type, check) => (newValue, oldValue) => {
	if (check(oldValue)) {
		return !oldValue.isSame(newValue);
	}
	else if (check(newValue)) {
		return !newValue.isSame(oldValue);
	}
	else {
		return newValue !== oldValue;
	}
};

export const setDeepOnInit = (options) => {
	if (options.deep === false) {
		options.compare = simpleCompare;
	}
	delete options.deep;

	return options;
};

export const mapEnforcer = (enforcer) => (newValue, oldValue, options) => {
	return enforcer(newValue, oldValue, options.coerce);
};

export const mapEnforcerNumeric = (enforcer) => (newValue, oldValue, options) => {
	return enforcer(newValue, oldValue, options.coerce, options.min, options.max);
};

export const mapEnforcerDefaultCoerceTrue = (enforcer) => (newValue, oldValue, options) => {
	return enforcer(newValue, oldValue, enforceBoolean(options.coerce, true));
};

export const buildMethod = (defaultSettings = {}, onInit) => {
	defaultSettings = {
		enforce: notEnforced,
		compare: simpleCompare,
		...defaultSettings
	};

	return (options) => {
		const key = Symbol();

		options = {
			...clone(defaultSettings),
			...options
		};
		if (onInit) {
			options = onInit(options);
		}

		if ('other' in options && !isArray(options.other)) {
			options.other = [options.other];
		}

		return function(newValue, isForcedSave) {
			let value;
			let vars;

			if (options.get !== undefined) {
				value = options.get.call(this);
			}
			else {
				vars = _(this) || _.set(this);

				if (!Object.getOwnPropertySymbols(vars).includes(key)) {
					vars[key] = options.init;
				}

				value = vars[key];
			}

			if (arguments.length) {
				if (!options.other || !options.other.some((value) => newValue === value || isInstanceOf(newValue, value))) {
					newValue = options.enforce.call(this, newValue, value, options);
				}

				if (options.compare(newValue, value) || isForcedSave) {
					if (options.before !== undefined) {
						options.before.call(this, value);
					}
					if (options.get === undefined) {
						vars[key] = newValue;
					}
					if (options.set !== undefined) {
						options.set.call(this, newValue);
					}
				}

				return this;
			}

			return (options.stringify && value && value.toString) ? value.toString() : value;
		};
	};
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
export default buildMethod();

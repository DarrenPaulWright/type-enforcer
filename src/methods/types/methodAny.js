import { castArray, cloneDeep, isEqual } from 'lodash';
import enforceBoolean from '../../enforcer/types/enforceBoolean';
import before from '../variants/before';
import beforeSet from '../variants/beforeSet';
import get from '../variants/get';
import getBefore from '../variants/getBefore';
import getBeforeSet from '../variants/getBeforeSet';
import getOtherBefore from '../variants/getOtherBefore';
import getOtherBeforeSet from '../variants/getOtherBeforeSet';
import getOtherSet from '../variants/getOtherSet';
import getSet from '../variants/getSet';
import none from '../variants/none';
import other from '../variants/other';
import otherBefore from '../variants/otherBefore';
import otherBeforeSet from '../variants/otherBeforeSet';
import otherSet from '../variants/otherSet';
import set from '../variants/set';

const notEnforced = (newValue) => newValue;

const simpleCompare = (newValue, oldValue) => newValue !== oldValue;

export const deepCompare = (newValue, oldValue) => !isEqual(newValue, oldValue);

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
	defaultSettings = Object.assign({
		enforce: notEnforced,
		compare: simpleCompare
	}, defaultSettings);

	return (options) => {
		let method;

		options = Object.assign(cloneDeep(defaultSettings), options);
		if (onInit) {
			options = onInit(options);
		}

		if ('other' in options) {
			options.other = castArray(options.other);
		}

		if (options.get) {
			if (options.other) {
				if (options.set) {
					method = options.before ? getOtherBeforeSet : getOtherSet;
				}
				else {
					method = options.before ? getOtherBefore : get;
				}
			}
			else {
				if (options.set) {
					method = options.before ? getBeforeSet : getSet;
				}
				else {
					method = options.before ? getBefore : get;
				}
			}
		}
		else {
			if (options.other) {
				if (options.set) {
					method = options.before ? otherBeforeSet : otherSet;
				}
				else {
					method = options.before ? otherBefore : other;
				}
			}
			else {
				if (options.set) {
					method = options.before ? beforeSet : set;
				}
				else {
					method = options.before ? before : none;
				}
			}
		}

		return method(options);
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
 *         set: function(newValue) {
 *             console.log(this);
 *             console.log(newValue);
 *         }
 *     });
 *     anotherMethod = method.any();
 *     thirdMethod = method.any({
 *         get: function(newValue) {
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

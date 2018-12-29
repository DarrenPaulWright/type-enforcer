import { assign, castArray, cloneDeep } from 'lodash';
import before from '../variants/before';
import beforeSet from '../variants/beforeSet';
import get from '../variants/get';
import getBefore from '../variants/getBefore';
import getBeforeSet from '../variants/getBeforeSet';
import getOther from '../variants/getOther';
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

export const buildMethod = (defaultSettings = {}) => {
	defaultSettings = assign({
		enforce: notEnforced,
		compare: simpleCompare
	}, defaultSettings);

	return (options) => {
		let method;

		options = assign(cloneDeep(defaultSettings), options);

		if ('other' in options) {
			options.other = castArray(options.other);
		}

		if (options.get) {
			if (options.other) {
				if (options.set) {
					method = options.before ? getOtherBeforeSet : getOtherSet;
				}
				else {
					method = options.before ? getOtherBefore : getOther;
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
 * Builds a method for getting/setting any data type
 *
 * @function method.any
 *
 * @arg {Object}   [options]
 * @arg {*} [options.init] - The initial value
 * @arg {Function} [options.enforce] - Enforce this data type
 * @arg {Function} [options.compare=] - Compares a new value to the current value. Return true if the two values are different.
 * @arg {Function} [options.before] - Called before a new valid value is set. Provides the prior value, sets the context to the methods constructor.
 * @arg {Function} [options.set] - Called after a new valid value is set. Provides the new value, sets the context to the methods constructor.
 * @arg {Function} [options.get] - Called to get the value, sets the context to the methods constructor.
 * @arg {Array}    [options.other] - An array of other values that can be set
 * @arg {Boolean}  [options.stringify=false] - If true, then call toString() on the value before returning it (if the value has a toString method)
 *
 * @returns {Function} accepts two args: a new value and forceSave override. If no args are provided then the current value is returned.
 */
export default buildMethod();

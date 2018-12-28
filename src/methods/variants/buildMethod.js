import { assign, castArray, cloneDeep } from 'lodash';
import before from './before';
import beforeSet from './beforeSet';
import get from './get';
import getBefore from './getBefore';
import getBeforeSet from './getBeforeSet';
import getOther from './getOther';
import getOtherBefore from './getOtherBefore';
import getOtherBeforeSet from './getOtherBeforeSet';
import getOtherSet from './getOtherSet';
import getSet from './getSet';
import none from './none';
import other from './other';
import otherBefore from './otherBefore';
import otherBeforeSet from './otherBeforeSet';
import otherSet from './otherSet';
import set from './set';

const notEnforced = (newValue) => newValue;

const simpleCompare = (newValue, oldValue) => newValue !== oldValue;

export default buildMethod = (defaultSettings = {}) => {
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

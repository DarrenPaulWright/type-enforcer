/**
 * Iterates over the provided settings and calls any methods of the same name, passing the value in as the argument.
 *
 * @function applySettings
 *
 * @arg {Object} target - The target to apply the settings to.
 * @arg {Object} settings
 * @arg {Array}  [priorityList=[]] - Array of method names to apply first, if they are actually in the settings. Methods are called in the order provided in this array.
 * @arg {Array}  [deferedList=[]] - Array of method names to apply last, if they are actually in the settings. Methods are called in the order provided in this array.
 */
export default (target, settings, priorityList = [], deferedList = []) => {
	const mainList = Object.keys(settings)
		.filter((method) => !deferedList.includes(method) && !priorityList.includes(method));

	const apply = (method) => {
		if (method in settings && method in target) {
			target[method](settings[method]);
		}
	};

	priorityList.forEach(apply);
	mainList.forEach(apply);
	deferedList.forEach(apply);
};

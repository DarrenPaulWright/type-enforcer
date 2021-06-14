import { forOwn } from 'object-agent';

/**
 * Iterates over the provided settings and calls any methods of the same name, passing the value in as the argument.
 *
 * @function applySettings
 *
 * @param {object} target - The target to apply the settings to.
 * @param {object} settings - Setting object.
 * @param {Array}  [priority] - Array of method names to apply first, if they are actually in the settings. Methods are called in the order provided in this array.
 * @param {Array}  [deferred] - Array of method names to apply last, if they are actually in the settings. Methods are called in the order provided in this array.
 */
export default (target, settings, priority, deferred) => {
	const apply = (method) => {
		if (method in settings && target[method] !== undefined) {
			target[method](settings[method]);
		}
	};

	if (priority !== undefined) {
		priority.forEach(apply);
	}

	forOwn(settings, (setting, method) => {
		if ((deferred === undefined || !deferred.includes(method)) &&
			(priority === undefined || !priority.includes(method)) &&
			target[method] !== undefined) {
			target[method](setting);
		}
	});

	if (deferred !== undefined) {
		deferred.forEach(apply);
	}
};

import { forOwn } from 'object-agent';

/**
 * Iterates over the provided settings and calls any methods of the same name, passing the value in as the argument.
 *
 * @function applySettings
 *
 * @arg {Object} target - The target to apply the settings to.
 * @arg {Object} settings
 * @arg {Array}  [priority] - Array of method names to apply first, if they are actually in the settings. Methods are called in the order provided in this array.
 * @arg {Array}  [deferred] - Array of method names to apply last, if they are actually in the settings. Methods are called in the order provided in this array.
 */
export default (target, settings, priority, deferred) => {
	const apply = (method) => {
		method in settings && target[method] !== undefined && target[method](settings[method]);
	};

	priority !== undefined && priority.forEach(apply);

	forOwn(settings, (setting, method) => {
		(deferred === undefined || deferred.indexOf(method) === -1) &&
		(priority === undefined || priority.indexOf(method) === -1) &&
		target[method] !== undefined && target[method](setting);
	});

	deferred !== undefined && deferred.forEach(apply);
};

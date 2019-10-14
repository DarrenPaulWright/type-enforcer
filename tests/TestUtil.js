import { assert } from 'chai';
import displayValue from 'display-value';
import { forOwn } from 'object-agent';
import { isObject } from '../src';

export const eachPair = (array1, array2, callback, isUnique = false) => {
	let i;
	let j;
	const length1 = array1.length;
	const length2 = array2.length;
	let doBreak = false;

	isUnique = array1 === array2 && isUnique;

	for (i = 0; i < length1; i++) {
		for (j = isUnique ? i + 1 : 0; j < length2; j++) {
			if (callback(array1[i], array2[j])) {
				doBreak = true;
				break;
			}
		}

		if (doBreak) {
			break;
		}
	}
};

/**
 * @function multiTest
 *
 * @arg {Object}       settings
 * @arg {Object|Array} settings.values
 * @arg {Object|Array} [settings.values2] - Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array.
 * @arg {Function}     settings.test
 * @arg {Function}     [settings.filter]
 * @arg {Function}     [settings.message=`should return ${output} when set to ${input}`]
 * @arg {String}       [settings.inputKey]
 * @arg {String}       [settings.outputKey]
 * @arg {*}            [settings.output]
 * @arg {Boolean}      [settings.eachPair=false] - values must be an array, runs tests on every combination of two items from values
 * @arg {Boolean}      [settings.eachUniquePair=false] - like eachPair, but runs unique pairs
 * @arg {String}       [settings.assertion='equal']
 */
export const multiTest = (settings) => {
	const assertion = settings.assertion || 'equal';

	let buildSingleMessage;
	if (settings.message) {
		buildSingleMessage = settings.message;
	}
	else if (settings.assertion === 'isTrue') {
		buildSingleMessage = (input) => `should return true for ${displayValue(input)}`;
	}
	else if (settings.assertion === 'isFalse') {
		buildSingleMessage = (input) => `should return false for ${displayValue(input)}`;
	}
	else {
		buildSingleMessage = (input, output) => `should return ${displayValue(output)} when set to ${input}`;
	}

	const buildDoubleMessage = settings.message || ((input1, input2, output) => {
		return `should return ${displayValue(output)} when ${displayValue(input1)} and ${displayValue(input2)} are provided`;
	});

	const testSingleValue = (input, output, value) => {
		if ((!settings.filter) || settings.filter(value)) {
			it(buildSingleMessage(input, output), () => {
				assert[assertion](settings.test(input), output);
			});
		}
	};

	const testDoubleValue = (input1, input2, output, value1, value2) => {
		if ((!settings.filter) || settings.filter(value1, value2)) {
			it(buildDoubleMessage(input1, input2, output), () => {
				assert[assertion](settings.test(input1, input2), output);
			});
		}
	};

	const testSingleArrayValue = (value) => {
		if ('output' in settings) {
			if ('inputKey' in settings) {
				testSingleValue(value[settings.inputKey], settings.output, value);
			}
			else {
				testSingleValue(value, settings.output, value);
			}
		}
		else if ('outputKey' in settings) {
			if ('inputKey' in settings) {
				testSingleValue(value[settings.inputKey], value[settings.outputKey], value);
			}
			else {
				testSingleValue(value, value[settings.outputKey], value);
			}
		}
		else {
			if ('inputKey' in settings) {
				testSingleValue(value[settings.inputKey], undefined, value);
			}
			else {
				testSingleValue(value, undefined, value);
			}
		}
	};

	const testDoubleArrayValue = (value1, value2) => {
		if ('output' in settings) {
			if ('inputKey' in settings) {
				testDoubleValue(value1[settings.inputKey], value2[settings.inputKey], settings.output, value1, value2);
			}
			else {
				testDoubleValue(value1, value2, settings.output, value1, value2);
			}
		}
		else {
			if ('inputKey' in settings) {
				testDoubleValue(value1[settings.inputKey], value2[settings.inputKey], undefined, value1, value2);
			}
			else {
				testDoubleValue(value1, value2, undefined, value1, value2);
			}
		}
	};

	if (isObject(settings.values)) {
		forOwn(settings.values, (value, key) => {
			testSingleValue(key, value, value);
		});
	}
	else if (settings.eachPair) {
		eachPair(settings.values, settings.values2 || settings.values, testDoubleArrayValue);
	}
	else if (settings.eachUniquePair) {
		eachPair(settings.values, settings.values2 || settings.values, testDoubleArrayValue, true);
	}
	else {
		settings.values.forEach(testSingleArrayValue);
	}
};

export const testMethod = (settings) => {
	const Constructor = settings.Constructor;

	describe('(testMethod)', () => {
		it('should return "' + settings.defaultValue + '" when the ' + settings.methodName + ' setting is not set', () => {
			const instance = new Constructor();

			if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
				assert.isTrue(instance[settings.methodName]().isSame(settings.defaultValue));
			}
			else {
				assert.deepEqual(instance[settings.methodName](), settings.defaultValue);
			}
		});

		if (settings.defaultValue !== undefined) {
			it('should return "' + settings.defaultValue + '" when the ' + settings.methodName + ' method is set to "' + settings.defaultValue + '"', () => {
				const instance = new Constructor()[settings.methodName](settings.defaultValue);

				if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
					assert.isTrue(instance[settings.methodName]().isSame(settings.defaultValue));
				}
				else {
					assert.deepEqual(instance[settings.methodName](), settings.defaultValue);
				}
			});
		}

		it('should return "' + settings.testValue + '" when the ' + settings.methodName + ' method is set to "' + settings.testValue + '"', () => {
			const instance = new Constructor()[settings.methodName](settings.testValue);

			if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
				assert.isTrue(instance[settings.methodName]().isSame(settings.testValue));
			}
			else {
				assert.deepEqual(instance[settings.methodName](), settings.testValue);
			}
		});

		it('should return "' + settings.testValue + '" when the ' + settings.methodName + ' method is set to "' + settings.testValue + '" twice', () => {
			const instance = new Constructor();
			instance[settings.methodName](settings.testValue);
			instance[settings.methodName](settings.testValue);

			if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
				assert.isTrue(instance[settings.methodName]().isSame(settings.testValue));
			}
			else {
				assert.deepEqual(instance[settings.methodName](), settings.testValue);
			}
		});

		if (settings.secondTestValue !== undefined) {
			it('should return "' + settings.secondTestValue + '" when the ' + settings.methodName + ' method is set to "' + settings.testValue + '" and then "' + settings.secondTestValue + '"', () => {
				const instance = new Constructor();
				instance[settings.methodName](settings.testValue);
				instance[settings.methodName](settings.secondTestValue);

				if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
					assert.isTrue(instance[settings.methodName]().isSame(settings.secondTestValue));
				}
				else {
					assert.deepEqual(instance[settings.methodName](), settings.secondTestValue);
				}
			});

			it('should NOT return "' + settings.testValue + '" when the ' + settings.methodName + ' method is set to "' + settings.testValue + '" and then "' + settings.secondTestValue + '"', () => {
				const instance = new Constructor();
				instance[settings.methodName](settings.testValue);
				instance[settings.methodName](settings.secondTestValue);

				if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
					assert.isFalse(instance[settings.methodName]().isSame(settings.testValue));
				}
				else {
					assert.notDeepEqual(instance[settings.methodName](), settings.testValue);
				}
			});
		}
	});
};

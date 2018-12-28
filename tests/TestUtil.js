import { assert } from 'chai';

export default function TestUtil(Constructor) {
	this.testMethod = (settings) => {
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
};

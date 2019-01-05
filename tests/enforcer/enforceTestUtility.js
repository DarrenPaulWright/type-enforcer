import { assert } from 'chai';
import { CssSize, DockPoint, enforce, Enum, Point, Thickness, Vector } from '../../src';

const validArray1 = [{
	id: 1
}];

const validCssSize2 = new CssSize('100px');
const validThickness2 = new Thickness('100px 200px');
const validString1 = 'test string';
const validFunction1 = () => {
	const test1 = 1;
};
const validInt = 11;
const validFloat = 34.23463456;
const validObject = {
	id: 1
};
const validDate1 = new Date('1/1/2000');
const validElement = document.createElement('div');
const dockPoint1 = new DockPoint(DockPoint.POINTS.TOP_LEFT);
const point1 = new Point(1, 2);
const vector1 = new Vector([1, 2], [3, 4]);
const validEnumObject = new Enum({
	test1: 'test 1',
	test2: 'test 2',
	test3: 'test 3'
});
const validEnum1 = validEnumObject.test1;

export const runNegativeTests = (methodName, defaultValue, otherArg) => {
	if (methodName !== 'array') {
		if (otherArg) {
			it('should return the default value when an array is provided', () => {
				assert.deepEqual(enforce[methodName](validArray1, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when an array is provided', () => {
				assert.deepEqual(enforce[methodName](validArray1, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'bool') {
		if (otherArg) {
			it('should return the default value when a true is provided', () => {
				assert.deepEqual(enforce[methodName](true, otherArg, defaultValue), defaultValue);
			});
			it('should return the default value when a false is provided', () => {
				assert.deepEqual(enforce[methodName](false, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a true is provided', () => {
				assert.deepEqual(enforce[methodName](true, defaultValue), defaultValue);
			});
			it('should return the default value when a false is provided', () => {
				assert.deepEqual(enforce[methodName](false, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'cssSize') {
		if (otherArg) {
			it('should return the default value when a css size is provided', () => {
				assert.deepEqual(enforce[methodName](validCssSize2, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a css size is provided', () => {
				assert.deepEqual(enforce[methodName](validCssSize2, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'date') {
		if (otherArg) {
			it('should return the default value when a date is provided', () => {
				assert.deepEqual(enforce[methodName](validDate1, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a date is provided', () => {
				assert.deepEqual(enforce[methodName](validDate1, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'dockPoint') {
		if (otherArg) {
			it('should return the default value when a thickness is provided', () => {
				assert.deepEqual(enforce[methodName](dockPoint1, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a thickness is provided', () => {
				assert.deepEqual(enforce[methodName](dockPoint1, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'element') {
		if (otherArg) {
			it('should return the default value when a DOM element is provided', () => {
				assert.deepEqual(enforce[methodName](validElement, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a DOM element is provided', () => {
				assert.deepEqual(enforce[methodName](validElement, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'enum' && methodName !== 'string') {
		if (otherArg) {
			it('should return the default value when an enum value is provided', () => {
				assert.deepEqual(enforce[methodName](validEnum1, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when an enum value is provided', () => {
				assert.deepEqual(enforce[methodName](validEnum1, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'func') {
		if (otherArg) {
			it('should return the default value when a function is provided', () => {
				assert.deepEqual(enforce[methodName](validFunction1, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a function is provided', () => {
				assert.deepEqual(enforce[methodName](validFunction1, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'instance') {
		if (otherArg) {
			it('should return the default value when an instance is provided', () => {
				assert.deepEqual(enforce[methodName](vector1, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when an instance is provided', () => {
				assert.deepEqual(enforce[methodName](vector1, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'int') {
		if (otherArg) {
			it('should return the default value when an int is provided', () => {
				assert.deepEqual(enforce[methodName](validInt, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when an int is provided', () => {
				assert.deepEqual(enforce[methodName](validInt, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'number') {
		if (otherArg) {
			it('should return the default value when a float is provided', () => {
				assert.deepEqual(enforce[methodName](validFloat, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a float is provided', () => {
				assert.deepEqual(enforce[methodName](validFloat, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'object') {
		if (otherArg) {
			it('should return the default value when an object is provided', () => {
				assert.deepEqual(enforce[methodName](validObject, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when an object is provided', () => {
				assert.deepEqual(enforce[methodName](validObject, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'point') {
		if (otherArg) {
			it('should return the default value when a thickness is provided', () => {
				assert.deepEqual(enforce[methodName](point1, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a thickness is provided', () => {
				assert.deepEqual(enforce[methodName](point1, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'string') {
		if (otherArg) {
			it('should return the default value when an empty string is provided', () => {
				assert.deepEqual(enforce[methodName]('', otherArg, defaultValue), defaultValue);
			});
			it('should return the default value when a string is provided', () => {
				assert.deepEqual(enforce[methodName](validString1, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when an empty string is provided', () => {
				assert.deepEqual(enforce[methodName]('', defaultValue), defaultValue);
			});
			it('should return the default value when a string is provided', () => {
				assert.deepEqual(enforce[methodName](validString1, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'thickness') {
		if (otherArg) {
			it('should return the default value when a thickness is provided', () => {
				assert.deepEqual(enforce[methodName](validThickness2, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a thickness is provided', () => {
				assert.deepEqual(enforce[methodName](validThickness2, defaultValue), defaultValue);
			});
		}
	}
	if (methodName !== 'vector') {
		if (otherArg) {
			it('should return the default value when a thickness is provided', () => {
				assert.deepEqual(enforce[methodName](vector1, otherArg, defaultValue), defaultValue);
			});
		}
		else {
			it('should return the default value when a thickness is provided', () => {
				assert.deepEqual(enforce[methodName](vector1, defaultValue), defaultValue);
			});
		}
	}

	if (otherArg) {
		it('should return the default value when undefined is provided', () => {
			assert.deepEqual(enforce[methodName](undefined, otherArg, defaultValue), defaultValue);
		});
		it('should return the default value when null is provided', () => {
			assert.deepEqual(enforce[methodName](null, otherArg, defaultValue), defaultValue);
		});
	}
	else {
		it('should return the default value when undefined is provided', () => {
			assert.deepEqual(enforce[methodName](undefined, defaultValue), defaultValue);
		});
		it('should return the default value when null is provided', () => {
			assert.deepEqual(enforce[methodName](null, defaultValue), defaultValue);
		});
	}
};

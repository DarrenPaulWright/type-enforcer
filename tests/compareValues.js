import displayValue from 'display-value';
import { combo } from 'object-agent';

export const messageTrue = (input) => `should return true for ${displayValue(input[0])} and ${displayValue(input[1])}`;

export const messageFalse = (input) => `should return false for ${displayValue(input[0])} and ${displayValue(input[1])}`;

export const alwaysEqual = [
	[undefined, undefined],
	[null, null],
	[true, true],
	[false, false],
	['test', 'test'],
	[0, 0],
	[+0, 0],
	[0, +0],
	[Infinity, Infinity],
	[-Infinity, -Infinity]
];

export const sameValueNotEqual = [
	[+0, -0],
	[-0, +0],
	[0, -0],
	[-0, 0]
];

export const sameValueEqual = [
	[NaN, NaN]
];

export const abstractEqual = [
	...combo(['', false, 0]),
	[undefined, null],
	['17', 17],
	[new Number(3), 3],
	[[1, 2], '1,2'],
	[new String('test'), 'test'],
	[false, '0'],
	['1E2', 100]
];

export const alwaysNotEqual = [
	...combo([false, true, 'test', 17, /a/g, NaN]),
	...combo([undefined, true, 'test', 17, /a/, NaN]),
	...combo([null, true, 'test', 17, /a/, NaN]),
	...combo(['', true, 'test', 17, /a/, NaN]),
	[Infinity, -Infinity]
];

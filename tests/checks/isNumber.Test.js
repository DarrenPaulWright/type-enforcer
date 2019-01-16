import { find } from 'lodash';
import { isNumber } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'number'});
const coercableValues = [
	'0',
	'1',
	'1.00',
	'1E2',
	'1E02',
	'1E+02',
	'-1',
	'-1.00',
	'-1E2',
	'-1E02',
	'-1E+02',
	'-0',
	'-0.0',
	'+0',
	'+0.0',
	'0.00',
	'999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999',
	'Infinity',
	'-Infinity',
	'0x0',
	'0xffffffff',
	'0xffffffffffffffff',
	'0xabad1dea',
	'123456789012345678901234567890123456789',
	'01000',
	'08',
	'09',
	'2.2250738585072011e-308'];
const nonCoercableValues = [
	'$1.00',
	'1/2',
	'-$1.00',
	'-1/2',
	'1/0',
	'0/0',
	'-2147483648/-1',
	'-9223372036854775808/-1',
	'0..0',
	'.',
	'0.0.0',
	'0,00',
	'0,,0',
	',',
	'0,0,0',
	'0.0/0',
	'1.0/0.0',
	'0.0/0.0',
	'1,0/0,0',
	'0,0/0,0',
	'--1',
	'-',
	'-.',
	'-,',
	'NaN',
	'INF',
	'1#INF',
	'-1#IND',
	'1#QNAN',
	'1#SNAN',
	'1#IND',
	'1,000.00',
	'1 000.00',
	'1\'000.00',
	'1,000,000.00',
	'1 000 000.00',
	'1\'000\'000.00',
	'1.000,00',
	'1 000,00',
	'1\'000,00',
	'1.000.000,00',
	'1 000 000,00',
	'1\'000\'000,00'
];
// coercable and nonCoercable strings taken from https://github.com/minimaxir/big-list-of-naughty-strings

describe('isNumber', () => {
	multiTest({
		values: data.true,
		test: (value) => isNumber(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isNumber(value),
		assertion: 'isFalse'
	});

	multiTest({
		values: coercableValues,
		test: (value) => isNumber(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: nonCoercableValues,
		test: (value) => isNumber(value, true),
		assertion: 'isFalse'
	});
});

import { assert } from 'chai';
import { enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validDateString = '2012/03/27';
const validDate1 = new Date('1/1/2000');
const validDate2 = new Date();

describe('enforce', () => {
	describe('.date', () => {
		it('should return the setter value when a valid date is provided', () => {
			assert.deepEqual(enforce.date(validDate2, validDate1), validDate2);
			assert.notDeepEqual(enforce.date(validDate2, validDate1), validDate1);
		});
		it('should return the default value when a date string is provided', () => {
			assert.deepEqual(enforce.date(validDateString, validDate1), validDate1);
		});

		runNegativeTests('date', validDate1);
	});
});

import { assert } from 'chai';
import { enforce } from '../../../src';
import { validDates } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

const validDateString = '2012/03/27';

describe('enforce', () => {
	describe('.date', () => {
		it('should return the setter value when a valid date is provided', () => {
			assert.deepEqual(enforce.date(validDates[1], validDates[0]), validDates[1]);
			assert.notDeepEqual(enforce.date(validDates[1], validDates[0]), validDates[0]);
		});
		it('should return the default value when a date string is provided', () => {
			assert.deepEqual(enforce.date(validDateString, validDates[0]), validDates[0]);
		});

		runNegativeTests('date', validDates[0]);
	});
});

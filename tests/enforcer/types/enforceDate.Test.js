import { assert } from 'chai';
import { enforce, enforceDate } from '../../../src';
import { multiTest } from '../../TestUtil';
import { dateData as data, validDates } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

const validDateString = '2012/03/27';

describe('enforce', () => {
	describe('.date', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceDate, enforce.date);
		});

		it('should return the setter value when a valid date is provided', () => {
			assert.deepEqual(enforce.date(validDates[1], validDates[0]), validDates[1]);
			assert.notDeepEqual(enforce.date(validDates[1], validDates[0]), validDates[0]);
		});
		it('should return the default value when a date string is provided', () => {
			assert.deepEqual(enforce.date(validDateString, validDates[0]), validDates[0]);
		});

		multiTest({
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: new Date(item)
				};
			}),
			message(input) {
				return `should return a coerced ${input} when coerce is true`;
			},
			test(value) {
				return enforce.date(value, value, true);
			},
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: item
				};
			}),
			message(input) {
				return `should NOT return a coerced ${input} when coerce is false`;
			},
			test(value) {
				return enforce.date(value, value, false);
			},
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message(input) {
				return `should return the alt value when ${input} is provided and coerce is true`;
			},
			test(value) {
				return enforce.date(value, 'testAlt', true);
			},
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('date', validDates[0]);
	});
});

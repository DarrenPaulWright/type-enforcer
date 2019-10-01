import { assert } from 'chai';
import { AUTO, CssSize, enforce, enforceCssSize, INHERIT, INITIAL } from '../../../src';
import { multiTest } from '../../TestUtil';
import { cssSizeData as data, validCssSizes } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.cssSize', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceCssSize, enforce.cssSize);
		});

		it('should return the setter value when a valid css size is provided', () => {
			assert.isTrue(enforce.cssSize(AUTO, validCssSizes[0], true) instanceof CssSize);
			assert.equal(enforce.cssSize(AUTO, validCssSizes[0], true).toString(), AUTO);
		});
		it('should return the setter value when "inherit" is provided', () => {
			assert.deepEqual(enforce.cssSize(INHERIT, validCssSizes[0], true).toString(), INHERIT);
		});
		it('should return the setter value when "initial" is provided', () => {
			assert.deepEqual(enforce.cssSize(INITIAL, validCssSizes[0], true).toString(), INITIAL);
		});

		multiTest({
			values: data.coerceTrue.map((item) => {
				return {
					input: item,
					output: new CssSize(item)
				};
			}),
			message(input) {
				return `should return a coerced ${input} when coerce is true`;
			},
			test(value) {
				return enforce.cssSize(value, value, true);
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
				return enforce.cssSize(value, value, false);
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
				return enforce.cssSize(value, 'testAlt', true);
			},
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('cssSize', validCssSizes[0]);
	});
});

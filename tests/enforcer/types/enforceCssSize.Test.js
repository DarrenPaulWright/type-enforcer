import { assert } from 'chai';
import { map } from 'lodash';
import { AUTO, CssSize, enforce, INHERIT, INITIAL } from '../../../src';
import { validCssSizes, cssSizeData as data, multiTest } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.cssSize', () => {
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
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: new CssSize(item)
				}
			}),
			message: (input) => `should return a coerced ${input} when coerce is true`,
			test: (value) => enforce.cssSize(value, value, true),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: map(data.coerceTrue, (item) => {
				return {
					input: item,
					output: item
				}
			}),
			message: (input) => `should NOT return a coerced ${input} when coerce is false`,
			test: (value) => enforce.cssSize(value, value, false),
			inputKey: 'input',
			outputKey: 'output',
			assertion: 'deepEqual'
		});

		multiTest({
			values: data.coerceFalse,
			message: (input) => `should return the alt value when ${input} is provided and coerce is true`,
			test: (value) => enforce.cssSize(value, 'testAlt', true),
			output: 'testAlt',
			assertion: 'deepEqual'
		});

		runNegativeTests('cssSize', validCssSizes[0]);
	});
});

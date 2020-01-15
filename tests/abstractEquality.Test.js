import { multiTest } from 'type-enforcer-test-helper';
import { abstractEquality } from '../index.js';
import {
	abstractEqual,
	alwaysEqual,
	alwaysNotEqual,
	messageFalse,
	messageTrue,
	sameValueEqual,
	sameValueNotEqual
} from './compareValues.js';

describe('abstractEquality', () => {
	multiTest({
		values: alwaysEqual,
		message: messageTrue,
		test(value) {
			return abstractEquality(value[0], value[1]);
		},
		assertion: 'isTrue'
	});

	multiTest({
		values: sameValueNotEqual,
		message: messageTrue,
		test(value) {
			return abstractEquality(value[0], value[1]);
		},
		assertion: 'isTrue'
	});

	multiTest({
		values: abstractEqual,
		message: messageTrue,
		test(value) {
			return abstractEquality(value[0], value[1]);
		},
		assertion: 'isTrue'
	});

	multiTest({
		values: alwaysNotEqual,
		message: messageFalse,
		test(value) {
			return abstractEquality(value[0], value[1]);
		},
		assertion: 'isFalse'
	});

	multiTest({
		values: sameValueEqual,
		message: messageFalse,
		test(value) {
			return abstractEquality(value[0], value[1]);
		},
		assertion: 'isFalse'
	});
});

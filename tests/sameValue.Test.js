import { multiTest } from 'type-enforcer-test-helper';
import { sameValue } from '../index.js';
import {
	abstractEqual,
	alwaysEqual,
	alwaysNotEqual,
	messageFalse,
	messageTrue,
	sameValueEqual,
	sameValueNotEqual
} from './compareValues.js';

describe('sameValue', () => {
	multiTest({
		values: alwaysEqual,
		message: messageTrue,
		test(value) {
			return sameValue(value[0], value[1]);
		},
		assertion: 'isTrue'
	});

	multiTest({
		values: sameValueNotEqual,
		message: messageFalse,
		test(value) {
			return sameValue(value[0], value[1]);
		},
		assertion: 'isFalse'
	});

	multiTest({
		values: abstractEqual,
		message: messageFalse,
		test(value) {
			return sameValue(value[0], value[1]);
		},
		assertion: 'isFalse'
	});

	multiTest({
		values: alwaysNotEqual,
		message: messageFalse,
		test(value) {
			return sameValue(value[0], value[1]);
		},
		assertion: 'isFalse'
	});

	multiTest({
		values: sameValueEqual,
		message: messageTrue,
		test(value) {
			return sameValue(value[0], value[1]);
		},
		assertion: 'isTrue'
	});
});

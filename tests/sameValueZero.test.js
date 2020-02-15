import { multiTest } from 'type-enforcer-test-helper';
import { sameValueZero } from '../index.js';
import {
	abstractEqual,
	alwaysEqual,
	alwaysNotEqual,
	messageFalse,
	messageTrue,
	sameValueEqual,
	sameValueNotEqual
} from './compareValues.js';

describe('sameValueZero', () => {
	multiTest({
		values: alwaysEqual,
		message: messageTrue,
		test(value) {
			return sameValueZero(value[0], value[1]);
		},
		assertion: 'true'
	});

	multiTest({
		values: sameValueNotEqual,
		message: messageTrue,
		test(value) {
			return sameValueZero(value[0], value[1]);
		},
		assertion: 'true'
	});

	multiTest({
		values: abstractEqual,
		message: messageFalse,
		test(value) {
			return sameValueZero(value[0], value[1]);
		},
		assertion: 'false'
	});

	multiTest({
		values: alwaysNotEqual,
		message: messageFalse,
		test(value) {
			return sameValueZero(value[0], value[1]);
		},
		assertion: 'false'
	});

	multiTest({
		values: sameValueEqual,
		message: messageTrue,
		test(value) {
			return sameValueZero(value[0], value[1]);
		},
		assertion: 'true'
	});
});

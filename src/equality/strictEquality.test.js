import { describe } from 'hippogriff';
import { multiTest } from 'type-enforcer-test-helper';
import { strictEquality } from '../../index.js';
import {
	abstractEqual,
	alwaysEqual,
	alwaysNotEqual,
	messageFalse,
	messageTrue,
	sameValueEqual,
	sameValueNotEqual
} from '../../tests/helpers/compareValues.js';

describe('strictEquality', () => {
	multiTest({
		values: alwaysEqual,
		message: messageTrue,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'true'
	});

	multiTest({
		values: sameValueNotEqual,
		message: messageTrue,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'true'
	});

	multiTest({
		values: abstractEqual,
		message: messageFalse,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'false'
	});

	multiTest({
		values: alwaysNotEqual,
		message: messageFalse,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'false'
	});

	multiTest({
		values: sameValueEqual,
		message: messageFalse,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'false'
	});
});

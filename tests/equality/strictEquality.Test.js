import { strictEquality } from '../../src';
import { multiTest } from '../TestUtil';
import {
	abstractEqual,
	alwaysEqual,
	alwaysNotEqual,
	messageFalse,
	messageTrue,
	sameValueEqual,
	sameValueNotEqual
} from './compareValues';

describe('strictEquality', () => {
	multiTest({
		values: alwaysEqual,
		message: messageTrue,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'isTrue'
	});

	multiTest({
		values: sameValueNotEqual,
		message: messageTrue,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'isTrue'
	});

	multiTest({
		values: abstractEqual,
		message: messageFalse,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'isFalse'
	});

	multiTest({
		values: alwaysNotEqual,
		message: messageFalse,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'isFalse'
	});

	multiTest({
		values: sameValueEqual,
		message: messageFalse,
		test(value) {
			return strictEquality(value[0], value[1]);
		},
		assertion: 'isFalse'
	});
});

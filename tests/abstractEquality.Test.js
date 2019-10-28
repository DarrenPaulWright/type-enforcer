import { abstractEquality } from '../src';
import {
	abstractEqual,
	alwaysEqual,
	alwaysNotEqual,
	messageFalse,
	messageTrue,
	sameValueEqual,
	sameValueNotEqual
} from './compareValues';
import { multiTest } from './TestUtil';

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

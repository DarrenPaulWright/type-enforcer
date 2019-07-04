import { sameValueZero } from '../../src';
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

describe('sameValueZero', () => {
	multiTest({
		values: alwaysEqual,
		message: messageTrue,
		test: (value) => sameValueZero(value[0], value[1]),
		assertion: 'isTrue'
	});

	multiTest({
		values: sameValueNotEqual,
		message: messageTrue,
		test: (value) => sameValueZero(value[0], value[1]),
		assertion: 'isTrue'
	});

	multiTest({
		values: abstractEqual,
		message: messageFalse,
		test: (value) => sameValueZero(value[0], value[1]),
		assertion: 'isFalse'
	});

	multiTest({
		values: alwaysNotEqual,
		message: messageFalse,
		test: (value) => sameValueZero(value[0], value[1]),
		assertion: 'isFalse'
	});

	multiTest({
		values: sameValueEqual,
		message: messageTrue,
		test: (value) => sameValueZero(value[0], value[1]),
		assertion: 'isTrue'
	});
});
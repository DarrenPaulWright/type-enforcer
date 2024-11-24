import castArray from '../../src/utility/castArray.js';
import { when, bench } from 'hippogriff';

/* eslint-disable no-unused-vars */
when('castArray', () => {
	let sandbox = null;
	let args = null;

	// eslint-disable-next-line jsdoc/require-jsdoc
	function getArgs() {
		// eslint-disable-next-line prefer-rest-params
		args = arguments;
	}

	getArgs('a', 'b', 'c');

	bench('empty array', () => {
		sandbox = castArray([]);
	});

	bench('small array', () => {
		sandbox = castArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	bench('undefined', () => {
		sandbox = castArray();
	});

	bench('args', () => {
		sandbox = castArray(args);
	});

	bench('number', () => {
		sandbox = castArray(23);
	});

	bench('null', () => {
		sandbox = castArray(null);
	});
});

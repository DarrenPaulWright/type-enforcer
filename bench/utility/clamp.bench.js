import clamp from '../../src/utility/clamp.js';
import { when, bench, beforeEach } from 'hippogriff';

/* eslint-disable no-unused-vars */
when('clamp', () => {
	let sandbox = null;

	bench('small numbers', () => {
		sandbox = clamp(2, 1, 3);
	});

	bench('large numbers', () => {
		sandbox = clamp(28127649127345, 18127649127345, 38127649127345);
	});
});

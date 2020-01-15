import { benchSettings } from 'karma-webpack-bundle';
import castArray from '../../src/utility/castArray.js';

suite(`castArray`, () => {
	let sandbox;
	let args;

	function getArgs() {
		args = arguments;
	}

	getArgs('a', 'b', 'c');

	benchmark(`empty array`, () => {
		sandbox = castArray([]);
	}, benchSettings);

	benchmark(`small array`, () => {
		sandbox = castArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	}, benchSettings);

	benchmark(`undefined`, () => {
		sandbox = castArray();
	}, benchSettings);

	benchmark(`args`, () => {
		sandbox = castArray(args);
	}, benchSettings);

	benchmark(`number`, () => {
		sandbox = castArray(23);
	}, benchSettings);

	benchmark(`null`, () => {
		sandbox = castArray(null);
	}, benchSettings);
});

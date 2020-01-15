import { benchSettings } from 'karma-webpack-bundle';
import clamp from '../../src/utility/clamp.js';

suite(`clamp`, () => {
	let sandbox;

	benchmark(`small numbers`, () => {
		sandbox = clamp(2, 1, 3);
	}, benchSettings);

	benchmark(`large numbers`, () => {
		sandbox = clamp(28127649127345, 18127649127345, 38127649127345);
	}, benchSettings);

});

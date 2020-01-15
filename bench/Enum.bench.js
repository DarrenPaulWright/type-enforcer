import { benchSettings } from 'karma-webpack-bundle';
import { Enum } from '../index.js';

suite(`Enum`, () => {
	let sandbox;
	let enumInstance;
	let id = 1;
	const data = {
		one: 'one',
		two: 'two',
		three: 'three',
		four: 'four',
		five: 'five',
		six: 'six',
		seven: 'seven',
		eight: 'eight',
		nine: 'nine'
	};

	benchmark(`init`, () => {
		sandbox = new Enum(data);
	}, benchSettings);

	benchmark(`has`, () => {
		enumInstance.has('three');
	}, {
		...benchSettings,
		onStart() {
			enumInstance = new Enum(data);
		}
	});

	benchmark(`key`, () => {
		sandbox = enumInstance.key('three');
	}, {
		...benchSettings,
		onStart() {
			enumInstance = new Enum(data);
		}
	});

	benchmark(`each`, () => {
		enumInstance.each((value) => {
			sandbox = value;
		});
	}, {
		...benchSettings,
		onStart() {
			enumInstance = new Enum(data);
		}
	});

});

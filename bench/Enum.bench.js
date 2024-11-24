import { Enum } from '../index.js';
import { describe, bench, beforeEach } from 'hippogriff';

/* eslint-disable no-unused-vars */
describe('Enum', () => {
	let sandbox = null;
	let enumInstance = null;
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

	describe('initializing', () => {
		bench('init', () => {
			sandbox = new Enum(data);
		});
	});

	describe('initialized', () => {
		beforeEach(() => {
			enumInstance = new Enum(data);
		});

		bench('has', () => {
			enumInstance.has('three');
		});

		bench('key', () => {
			sandbox = enumInstance.key('three');
		});

		bench('each', () => {
			enumInstance.each((value) => {
				sandbox = value;
			});
		});
	});
});

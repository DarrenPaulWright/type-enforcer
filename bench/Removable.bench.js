import { Removable } from '../index.js';
import { when, bench, beforeEach } from 'hippogriff';

/* eslint-disable no-unused-vars */
when('Removable', () => {
	let sandbox = null;
	let instance = null;

	beforeEach(() => {
		instance = new Removable();
	})

	bench('isRemoved false', () => {
		sandbox = instance.isRemoved;
	});

	when('isRemoved', () => {
		beforeEach(() => {
			instance.remove();
		})

		bench('isRemoved true', () => {
			sandbox = instance.isRemoved;
		});
	});

	bench('remove, no callbacks', () => {
		sandbox = instance.remove();
	});

	when('isRemoved', () => {
		beforeEach(() => {
			instance.onRemove(() => {
				sandbox = instance;
			});
		})

		bench('remove, with callbacks', () => {
			sandbox = instance.remove();
		});
	});
});

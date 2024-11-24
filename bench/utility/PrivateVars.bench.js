/* eslint-disable unicorn/prevent-abbreviations */
import { PrivateVars as PrivateVars } from '../../index.js'; /* eslint-disable no-unused-vars */
import { when, bench, beforeEach } from 'hippogriff';

/* eslint-disable no-unused-vars */
when('PrivateVars', () => {
	let sandbox = null;

	class SimpleWeakMapWrapper extends WeakMap {
		// eslint-disable-next-line no-useless-constructor
		constructor() {
			super();
		}
	}

	class Widget {}

	const widget = new Widget();

	let _ = new PrivateVars();

	bench('new WeakMap', () => {
		sandbox = new WeakMap();
	});

	bench('new SimpleWeakMapWrapper', () => {
		sandbox = new SimpleWeakMapWrapper();
	});

	bench('init', () => {
		sandbox = new PrivateVars();
	});

	when('PrivateVars', () => {
		beforeEach(() => {
			_ = new PrivateVars();
		});

		bench('get empty', () => {
			sandbox = _(widget);
		});

		when('get', () => {
			beforeEach(() => {
				_ = new PrivateVars();
				_.set(widget);
			});

			bench('get', () => {
				sandbox = _(widget);
			});
		});

		bench('set', () => {
			sandbox = _.set(widget);
		});

		bench('set custom object', () => {
			sandbox = _.set(widget, { 'thing': 7 });
		});

		when('get', () => {
			beforeEach(() => {
				_ = new PrivateVars();
				_.set(widget, { 'thing': 7 });
			});

			bench('get custom object', () => {
				sandbox = _(widget);
			});
		});
	});
});

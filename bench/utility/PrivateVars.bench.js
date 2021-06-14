/* eslint-disable unicorn/prevent-abbreviations */
import { benchSettings } from 'karma-webpack-bundle';
import { PrivateVars as PrivateVars } from '../../index.js'; /* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */
suite('PrivateVars', () => {
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

	benchmark('new WeakMap', () => {
		sandbox = new WeakMap();
	}, benchSettings);

	benchmark('new SimpleWeakMapWrapper', () => {
		sandbox = new SimpleWeakMapWrapper();
	}, benchSettings);

	benchmark('init', () => {
		sandbox = new PrivateVars();
	}, benchSettings);

	benchmark('get empty', () => {
		sandbox = _(widget);
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
		}
	});

	benchmark('get', () => {
		sandbox = _(widget);
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
			_.set(widget);
		}
	});

	benchmark('set', () => {
		sandbox = _.set(widget);
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
		}
	});

	benchmark('set custom object', () => {
		sandbox = _.set(widget, { 'thing': 7 });
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
		}
	});

	benchmark('get custom object', () => {
		sandbox = _(widget);
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
			_.set(widget, { 'thing': 7 });
		}
	});
});

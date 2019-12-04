import { benchSettings } from 'karma-webpack-bundle';
import { PrivateVars } from '../../index';

suite(`PrivateVars`, () => {
	let sandbox;

	class SimpleWeakMapWrapper extends WeakMap {
		constructor() {
			super();
		}
	}

	class Widget {}

	const widget = new Widget();

	let _ = new PrivateVars();

	benchmark(`new WeakMap`, () => {
		sandbox = new WeakMap();
	}, benchSettings);

	benchmark(`new SimpleWeakMapWrapper`, () => {
		sandbox = new SimpleWeakMapWrapper();
	}, benchSettings);

	benchmark(`init`, () => {
		sandbox = new PrivateVars();
	}, benchSettings);

	benchmark(`get empty`, () => {
		sandbox = _(widget);
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
		}
	});

	benchmark(`get`, () => {
		sandbox = _(widget);
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
			_.set(widget);
		}
	});

	benchmark(`set`, () => {
		sandbox = _.set(widget);
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
		}
	});

	benchmark(`set custom object`, () => {
		sandbox = _.set(widget, {'thing': 7});
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
		}
	});

	benchmark(`get custom object`, () => {
		sandbox = _(widget);
	}, {
		...benchSettings,
		onStart() {
			_ = new PrivateVars();
			_.set(widget, {'thing': 7});
		}
	});

});

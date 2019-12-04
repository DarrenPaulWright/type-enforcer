import { benchSettings } from 'karma-webpack-bundle';
import { Removable } from '../index';

suite(`Removable`, () => {
	let sandbox;
	let instance;

	benchmark(`isRemoved false`, () => {
		sandbox = instance.isRemoved;
	}, {
		...benchSettings,
		onStart() {
			instance = new Removable();
		}
	});

	benchmark(`isRemoved true`, () => {
		sandbox = instance.isRemoved;
	}, {
		...benchSettings,
		onStart() {
			instance = new Removable();
			instance.remove();
		}
	});

	benchmark(`remove, no callbacks`, () => {
		sandbox = instance.remove();
	}, {
		...benchSettings,
		onStart() {
			instance = new Removable();
		}
	});

	benchmark(`remove, with callbacks`, () => {
		sandbox = instance.remove();
	}, {
		...benchSettings,
		onStart() {
			instance = new Removable();
			instance.onRemove(() => {
				sandbox = instance;
			});
		}
	});

});

import { benchSettings } from 'karma-webpack-bundle';
import { Queue } from '../index.js';

/* eslint-disable no-unused-vars */
suite('Queue', () => {
	let sandbox = null;
	let queue = null;
	let id = 1;
	const triggerSettings = {
		...benchSettings,
		onStart() {
			queue = new Queue();
			queue.add(() => {
				sandbox = 3;
			});
			queue.add(() => {
				sandbox = 3;
			});
			id = queue.add(() => {
				sandbox = 3;
			});
		}
	};

	benchmark('init', () => {
		sandbox = new Queue();
	}, benchSettings);

	benchmark('add', () => {
		queue.add(() => {
			sandbox = 3;
		});
	}, {
		...benchSettings,
		onStart() {
			queue = new Queue();
		}
	});

	benchmark('add bind', () => {
		queue.add(() => {
			sandbox = 3;
		});
	}, {
		...benchSettings,
		onStart() {
			queue = new Queue();
			queue.bindTo({});
		}
	});

	benchmark('bindTo', () => {
		queue.bindTo({});
	}, {
		...benchSettings,
		onStart() {
			queue = new Queue();
		}
	});

	benchmark('bindTo with callbacks', () => {
		queue.bindTo({});
	}, triggerSettings);

	benchmark('trigger id', () => {
		queue.trigger(id);
	}, triggerSettings);

	benchmark('trigger all', () => {
		queue.trigger();
	}, triggerSettings);

	benchmark('triggerFirst', () => {
		queue.triggerFirst();
	}, triggerSettings);

	benchmark('discard', () => {
		queue.add(() => {
			queue.discard(id);
		});
	}, {
		...benchSettings,
		onStart() {
			queue = new Queue();
			id = queue.add(() => {
				sandbox = 3;
			});
		}
	});
});

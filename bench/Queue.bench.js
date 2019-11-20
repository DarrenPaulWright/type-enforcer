import { benchSettings } from 'karma-webpack-bundle';
import { Queue } from '../index';

suite(`Queue`, () => {
	let sandbox;
	let queue;
	let id = 1;

	benchmark(`init`, () => {
		sandbox = new Queue();
	}, benchSettings);

	benchmark(`add`, () => {
		queue.add(() => {
			sandbox = 3;
		});
	}, {
		...benchSettings,
		onStart() {
			queue = new Queue();
		}
	});

	benchmark(`add bind`, () => {
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

	benchmark(`bindTo`, () => {
		queue.bindTo({});
	}, {
		...benchSettings,
		onStart() {
			queue = new Queue();
		}
	});

	benchmark(`bindTo with callbacks`, () => {
		queue.bindTo({});
	}, {
		...benchSettings,
		onStart() {
			queue = new Queue();
			queue.add(() => {
				sandbox = 3;
			});
			queue.add(() => {
				sandbox = 3;
			});
			queue.add(() => {
				sandbox = 3;
			});
		}
	});

	benchmark(`trigger id`, () => {
		queue.trigger(id);
	}, {
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
	});

	benchmark(`trigger all`, () => {
		queue.trigger();
	}, {
		...benchSettings,
		onStart() {
			queue = new Queue();
			queue.add(() => {
				sandbox = 3;
			});
			queue.add(() => {
				sandbox = 3;
			});
			queue.add(() => {
				sandbox = 3;
			});
		}
	});

	benchmark(`triggerFirst`, () => {
		queue.triggerFirst();
	}, {
		...benchSettings,
		onStart() {
			queue = new Queue();
			queue.add(() => {
				sandbox = 3;
			});
			queue.add(() => {
				sandbox = 3;
			});
			queue.add(() => {
				sandbox = 3;
			});
		}
	});

	benchmark(`discard`, () => {
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

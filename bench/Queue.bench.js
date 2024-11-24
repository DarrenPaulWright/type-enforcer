import { Queue } from '../index.js';
import { when, bench, beforeEach } from 'hippogriff';

/* eslint-disable no-unused-vars */
when('Queue', () => {
	let sandbox = null;
	let queue = null;
	let id = 1;

	bench('init', () => {
		sandbox = new Queue();
	});

	when('initialized', () => {
		beforeEach(() => {
			queue = new Queue();
		});

		bench('add', () => {
			queue.add(() => {
				sandbox = 3;
			});
		});

		when('bind', () => {
			beforeEach(() => {
				queue.bindTo({});
			});

			bench('add bind', () => {
				queue.add(() => {
					sandbox = 3;
				});
			});
		});

		bench('bindTo', () => {
			queue.bindTo({});
		});

		when('triggers', () => {
			beforeEach(() => {
				queue.add(() => {
					sandbox = 3;
				});
				queue.add(() => {
					sandbox = 3;
				});
				id = queue.add(() => {
					sandbox = 3;
				});
			});

			bench('bindTo with callbacks', () => {
				queue.bindTo({});
			});

			bench('trigger id', () => {
				queue.trigger(id);
			});

			bench('trigger all', () => {
				queue.trigger();
			});

			bench('triggerFirst', () => {
				queue.triggerFirst();
			});
		});

		when('triggers', () => {
			beforeEach(() => {
				id = queue.add(() => {
					sandbox = 3;
				});
			});

			bench('discard', () => {
				queue.add(() => {
					queue.discard(id);
				});
			});
		});
	});
});

import { forOwn } from 'object-agent';
import { methodKeyValue, methodQueue, methodString } from '../index.js';
import { when, bench } from 'hippogriff';

/* eslint-disable no-unused-vars */
when('', () => {
	when('methodString', () => {
		let sandbox = null;

		forOwn({
			none: null,
			set: {
				set(value) {
					sandbox = value;
				}
			},
			setGet: {
				set(value) {
					sandbox = value;
				},
				get() {
					return 2;
				}
			},
			setGetOther: {
				set(value) {
					sandbox = value;
				},
				get() {
					return 2;
				},
				other: [null, Number]
			},
			setGetOtherBefore: {
				before(value) {
					sandbox = value;
				},
				set(value) {
					sandbox = value;
				},
				get() {
					return 2;
				},
				other: [null, Number]
			}
		}, (value, key) => {
			class Widget {}

			Widget.prototype[key] = methodString(value);

			const widget = new Widget();

			bench(`${key} init`, () => {
				methodString(value);
			});

			bench(`${key} get`, () => {
				widget[key]();
			});

			bench(`${key} set`, () => {
				widget[key]('asdf');
			});

			bench(`${key} set other`, () => {
				widget[key](3);
			});

			bench(`${key} set bad`, () => {
				widget[key]([]);
			});
		});
	});

	when('methodKeyValue', () => {
		let sandbox = null;

		class Widget {}

		Widget.prototype.test = methodKeyValue({
			get() {
				return sandbox;
			},
			set(key, value) {
				sandbox = value;
			}
		});

		const widget = new Widget();

		bench('init', () => {
			methodKeyValue({
				get() {
					return sandbox;
				},
				set(key, value) {
					sandbox = value;
				}
			});
		});

		bench('get', () => {
			widget.test();
		});

		bench('get single', () => {
			widget.test('test');
		});

		bench('set', () => {
			widget.test({ 'asdf': 5, 'another': 10 });
		});

		bench('set single', () => {
			widget.test('asdf', 5);
		});
	});

	when('methodQueue', () => {
		let sandbox = null;

		class Widget {}

		Widget.prototype.test = methodQueue({
			set(queue, id) {
				sandbox = id;
			}
		});

		const widget = new Widget();

		bench('init', () => {
			methodQueue({
				set(queue, id) {
					sandbox = id;
				}
			});
		});

		bench('get', () => {
			widget.test();
		});

		bench('set', () => {
			widget.test(() => {
				sandbox = 1;
			});
		});
	});
});

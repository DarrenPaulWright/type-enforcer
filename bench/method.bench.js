import { benchSettings } from 'karma-webpack-bundle';
import { forOwn } from 'object-agent';
import { methodKeyValue, methodQueue, methodString } from '../index.js';

suite(`methodString`, () => {
	let sandbox;

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

		let widget = new Widget();

		benchmark(`${key} init`, () => {
			methodString(value);
		}, benchSettings);

		benchmark(`${key} get`, () => {
			widget[key]();
		}, benchSettings);

		benchmark(`${key} set`, () => {
			widget[key]('asdf');
		}, benchSettings);

		benchmark(`${key} set other`, () => {
			widget[key](3);
		}, benchSettings);

		benchmark(`${key} set bad`, () => {
			widget[key]([]);
		}, benchSettings);
	});
});

suite(`methodKeyValue`, () => {
	let sandbox;

	class Widget {}

	Widget.prototype.test = methodKeyValue({
		get() {
			return sandbox;
		},
		set(key, value) {
			sandbox = value;
		}
	});

	let widget = new Widget();

	benchmark(`init`, () => {
		methodKeyValue({
			get() {
				return sandbox;
			},
			set(key, value) {
				sandbox = value;
			}
		});
	}, benchSettings);

	benchmark(`get`, () => {
		widget.test();
	}, benchSettings);

	benchmark(`get single`, () => {
		widget.test('test');
	}, benchSettings);

	benchmark(`set`, () => {
		widget.test({'asdf': 5, 'another': 10});
	}, benchSettings);

	benchmark(`set single`, () => {
		widget.test('asdf', 5);
	}, benchSettings);
});

suite(`methodQueue`, () => {
	let sandbox;

	class Widget {}

	Widget.prototype.test = methodQueue({
		set(queue, id) {
			sandbox = id;
		}
	});

	let widget = new Widget();

	benchmark(`init`, () => {
		methodQueue({
			set(queue, id) {
				sandbox = id;
			}
		});
	}, benchSettings);

	benchmark(`get`, () => {
		widget.test();
	}, benchSettings);

	benchmark(`set`, () => {
		widget.test(() => {
			sandbox = 1;
		});
	}, benchSettings);
});

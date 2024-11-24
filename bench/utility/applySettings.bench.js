import { applySettings } from '../../index.js';
import { when, bench } from 'hippogriff';

when('applySettings', () => {
	class Widget {}

	const widget = new Widget();

	bench('settings only', () => {
		applySettings(widget, {
			test: 3,
			test1: 3,
			test2: 3,
			test3: 3,
			test4: 3,
			test5: 3,
			test6: 3,
			test7: 3,
			test8: 3,
			test9: 3
		});
	});

	bench('priority list', () => {
		applySettings(widget, {
			test: 3,
			test1: 3,
			test2: 3,
			test3: 3,
			test4: 3,
			test5: 3,
			test6: 3,
			test7: 3,
			test8: 3,
			test9: 3
		}, ['test1', 'test3', 'test7']);
	});

	bench('defered list', () => {
		applySettings(widget, {
			test: 3,
			test1: 3,
			test2: 3,
			test3: 3,
			test4: 3,
			test5: 3,
			test6: 3,
			test7: 3,
			test8: 3,
			test9: 3
		}, [], ['test', 'test4', 'test8']);
	});

	bench('both lists', () => {
		applySettings(widget, {
			test: 3,
			test1: 3,
			test2: 3,
			test3: 3,
			test4: 3,
			test5: 3,
			test6: 3,
			test7: 3,
			test8: 3,
			test9: 3
		}, ['test1', 'test3', 'test7'], ['test', 'test4', 'test8']);
	});
});

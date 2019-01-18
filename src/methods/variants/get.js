import { processOutput } from './helper';

export default (options) => function(...args) {
	if (args.length) {
		return this;
	}

	return processOutput(options.get.call(this), options);
};

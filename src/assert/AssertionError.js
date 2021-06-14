export default class AssertionError extends Error {
	constructor(message, properties) {
		super('expected ' + message);
		this.name = 'AssertionError';
		Object.assign(this, properties);

		if (this.stack !== undefined) {
			this.stack = this.stack.split('\n');
			this.stack.splice(1, 1);
			this.stack = this.stack.join('\n');
		}
	}
}

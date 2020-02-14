export default class AssertionError extends Error {
	constructor(message, props) {
		super('expected ' + message);
		this.name = 'AssertionError';
		Object.assign(this, props);

		if (this.stack !== undefined) {
			this.stack = this.stack.split('\n');
			this.stack.splice(1, 1);
			this.stack = this.stack.join('\n');
		}
	}
}

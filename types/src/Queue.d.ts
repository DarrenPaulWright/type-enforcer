export default class Queue<Values extends Array<any>> {
	/**
	 * Binds all current and future callbacks to a specified context.
	 */
	bindTo(context: object): this;
	bindTo(): object;

	/**
	 * Add a callback to the queue.
	 */
	add(callback: (...args: Values) => void): number;

	/**
	 * Remove a specific callback from the queue.
	 */
	discard(id: number | ((...args: Values) => void)): this;

	/**
	 * Remove ALL callbacks from the queue.
	 */
	discardAll(): void;

	/**
	 * Triggers one or all callbacks. If one of the callbacks returns true then no further callbacks will be called.
	 */
	trigger(): this;
	trigger(id: undefined | null, extraArguments?: Values, context?: object): this;
	trigger(id: number, extraArguments?: Values, context?: object): this;

	/**
	 * Triggers the first callback and removes it from the queue.
	 */
	triggerFirst(extraArguments?: Values, context?: object): this;

	/**
	 * The total number of current callbacks in this queue.
	 */
	get length(): number;

	/**
	 * See if this queue is currently executing callbacks.
	 */
	get isBusy(): boolean;
}

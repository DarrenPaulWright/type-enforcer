/**
 * ``` javascript
 * import { Removable } from 'type-enforcer';
 *
 * class MyClass extends Removable {}
 * ```
 *
 * @class Removable
 * @classdesc A mixin that adds methods to a class to facilitate clean-up
 */
export default class Removable {
	/**
	 * Calls all the onRemove callbacks and sets isRemoved to true.
	 */
	remove(): void;

	/**
	 * Adds a callback to a [Queue](docs/Queue.md) that gets triggered when the "remove" method is called
	 */
	onRemove(callback: () => void): this;
	onRemove(): Queue<[]>;

	/**
	 * If the returned value is true then remove has been called.
	 */
	get isRemoved(): boolean;
}
import Queue from './Queue.js';

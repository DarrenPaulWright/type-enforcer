declare function _default<Self extends object, Values extends Array<any>>(
	settings?: {
		set?(this: Self, queue: Queue<Values>, id: number, callback: (...args: Values) => void): void;

		bind?: boolean;
	}
): {
	(value: ((...args: Values) => void)): Self;

	(): Queue<Values>;
};

export default _default;
import Queue from '../Queue.js';

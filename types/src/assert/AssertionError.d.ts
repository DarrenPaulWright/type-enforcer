/**
 * @class AssertionError
 * @private
 */
export default class AssertionError extends Error {
	constructor(message: any, properties: any);

	stack: string;
}

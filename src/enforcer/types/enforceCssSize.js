import CssSize from '../../types/CssSize';

/**
 * If the first value is a valid CssSize then return that, otherwise return the alt value.
 *
 * @function enforce.cssSize
 *
 * @arg   {*} value
 * @arg   {CssSize} alt
 *
 * @returns {CssSize}
 */
export default (value, alt) => {
	if (CssSize.isValid(value) && !CssSize.isInstance(value)) {
		value = new CssSize(value);
	}
	return CssSize.isInstance(value) ? value : alt;
}

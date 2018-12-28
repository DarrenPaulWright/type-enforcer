import CssSize from '../../types/CssSize';

/**
 * If the first value is a valid css size then return that, otherwise return the second value.
 *
 * @function enforce.cssSize
 *
 * @param   {CssSize|String} setterValue
 * @param   {CssSize} defaultValue
 *
 * @returns {CssSize}
 */
export default (setterValue, defaultValue) => {
	if (CssSize.isValid(setterValue) && !CssSize.isInstance(setterValue)) {
		setterValue = new CssSize(setterValue);
	}
	return CssSize.isInstance(setterValue) ? setterValue : defaultValue;
}

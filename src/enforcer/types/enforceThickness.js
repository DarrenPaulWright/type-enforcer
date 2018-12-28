import Thickness from '../../types/Thickness';

/**
 * If the first value is a thickness then return that, otherwise return the second value.
 *
 * @function enforce.thickness
 *
 * @param   {String|Thickness} setterValue
 * @param   {Thickness} defaultValue
 *
 * @returns {Thickness}
 */
export default (setterValue, defaultValue) => {
	if (Thickness.isValid(setterValue) && !Thickness.isInstance(setterValue)) {
		setterValue = new Thickness(setterValue);
	}
	return Thickness.isInstance(setterValue) ? setterValue : defaultValue;
};

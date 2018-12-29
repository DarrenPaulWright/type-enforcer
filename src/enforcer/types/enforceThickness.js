import Thickness from '../../types/Thickness';

/**
 * If the first value is a thickness then return that, otherwise return the alt value.
 *
 * @function enforce.thickness
 *
 * @arg   {String|Thickness} value
 * @arg   {Thickness} alt
 *
 * @returns {Thickness}
 */
export default (value, alt) => {
	if (Thickness.isValid(value) && !Thickness.isInstance(value)) {
		value = new Thickness(value);
	}
	return Thickness.isInstance(value) ? value : alt;
};

import DockPoint from '../../types/DockPoint';

/**
 * If the first value is a valid dockPoint then return that, otherwise return the alt value.
 *
 * @function enforce.dockPoint
 *
 * @arg   {String} value
 * @arg   {String} alt
 *
 * @returns {DockPoint}
 */
export default (value, alt) => {
	if (DockPoint.isValid(value) && !DockPoint.isInstance(value)) {
		value = new DockPoint(value);
	}
	return DockPoint.isInstance(value) ? value : alt;
}

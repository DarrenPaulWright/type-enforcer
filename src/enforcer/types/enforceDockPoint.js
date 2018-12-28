import DockPoint from '../../types/DockPoint';

/**
 * If the first value is a valid dockPoint then return that, otherwise return the second value.
 *
 * @function enforce.dockPoint
 *
 * @param   {String} setterValue
 * @param   {String} defaultValue
 *
 * @returns {DockPoint}
 */
export default (setterValue, defaultValue) => {
	if (DockPoint.isValid(setterValue) && !DockPoint.isInstance(setterValue)) {
		setterValue = new DockPoint(setterValue);
	}
	return DockPoint.isInstance(setterValue) ? setterValue : defaultValue;
}

import Moment from 'moment/moment';

/**
 * If the first value is a valid js date or a momentjs instance of a valid date then return that, otherwise return
 * the second value.
 *
 * @function enforce.date
 *
 * @param   {Date} setterValue
 * @param   {Date} defaultValue
 *
 * @returns {Date}
 */
export default (setterValue, defaultValue) => {
	return ((Moment.isMoment(setterValue) && setterValue.isValid()) || Moment.isDate(setterValue)) ? setterValue : defaultValue;
}

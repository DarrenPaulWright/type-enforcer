import Moment from 'moment/moment';

/**
 * If the first value is a valid js date or a momentjs instance of a valid date then return that, otherwise return
 * the alt value.
 *
 * @function enforce.date
 *
 * @arg   {Date} value
 * @arg   {Date} alt
 *
 * @returns {Date}
 */
export default (value, alt) => {
	return ((Moment.isMoment(value) && value.isValid()) || Moment.isDate(value)) ? value : alt;
}

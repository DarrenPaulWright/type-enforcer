import enforceBool from '../../enforcer/types/enforceCssSize';
import buildMethod from '../variants/buildMethod';

export default buildMethod({
	enforce: enforceBool,
	compare: (newValue, oldValue) => (newValue && newValue.isSame) ? !newValue.isSame(oldValue) : newValue !== oldValue
});

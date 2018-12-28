import enforceThickness from '../../enforcer/types/enforceThickness';
import buildMethod from '../variants/buildMethod';

export default buildMethod({
	enforce: enforceThickness,
	compare: (newValue, oldValue) => (newValue && newValue.isSame) ? !newValue.isSame(oldValue) : newValue !== oldValue
});

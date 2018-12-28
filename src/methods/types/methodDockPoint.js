import enforceDockPoint from '../../enforcer/types/enforceDockPoint';
import buildMethod from '../variants/buildMethod';

export default buildMethod({
	enforce: enforceDockPoint,
	compare: (newValue, oldValue) => (newValue && newValue.isSame) ? !newValue.isSame(oldValue) : newValue !== oldValue
});

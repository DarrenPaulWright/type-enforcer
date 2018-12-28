import enforceVector from '../../enforcer/types/enforceVector';
import Vector from '../../types/Vector';
import buildMethod from '../variants/buildMethod';

export default buildMethod({
	init: new Vector(),
	enforce: enforceVector,
	compare: (vector1, vector2) => !vector1.isSame(vector2)
});

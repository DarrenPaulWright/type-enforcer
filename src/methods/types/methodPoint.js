import enforcePoint from '../../enforcer/types/enforcePoint';
import Point from '../../types/Point';
import buildMethod from '../variants/buildMethod';

export default buildMethod({
	init: new Point(),
	enforce: enforcePoint,
	compare: (point1, point2) => !point1.isSame(point2)
});

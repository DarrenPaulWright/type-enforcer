import { superimpose } from 'object-agent';
import * as typeEnforcer from '../index';

export default (library) => {
	superimpose(typeEnforcer, library, true);
};

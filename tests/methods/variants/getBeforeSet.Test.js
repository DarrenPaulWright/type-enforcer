import getBeforeSet from '../../../src/methods/variants/getBeforeSet';
import { testVariant } from '../methodTestUtility';

describe('getBeforeSet', () => {
	testVariant({
		variant: getBeforeSet,
		options: ['get', 'before', 'set']
	});
});

import getOtherBeforeSet from '../../../src/methods/variants/getOtherBeforeSet';
import { testVariant } from '../methodTestUtility';

describe('getOtherBeforeSet', () => {
	testVariant({
		variant: getOtherBeforeSet,
		options: ['get', 'other', 'before', 'set']
	});
});

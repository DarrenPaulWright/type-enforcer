import getOtherSet from '../../../src/methods/variants/getOtherSet';
import { testVariant } from '../methodTestUtility';

describe('getOtherSet', () => {
	testVariant({
		variant: getOtherSet,
		options: ['get', 'other', 'set']
	});
});

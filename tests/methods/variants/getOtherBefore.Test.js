import getOtherBefore from '../../../src/methods/variants/getOtherBefore';
import { testVariant } from '../methodTestUtility';

describe('getOtherBefore', () => {
	testVariant({
		variant: getOtherBefore,
		options: ['get', 'other', 'before']
	});
});

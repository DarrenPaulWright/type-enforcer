import otherBefore from '../../../src/methods/variants/otherBefore';
import { testVariant } from '../methodTestUtility';

describe('otherBefore', () => {
	testVariant({
		variant: otherBefore,
		options: ['other', 'before']
	});
});

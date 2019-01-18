import otherSet from '../../../src/methods/variants/otherSet';
import { testVariant } from '../methodTestUtility';

describe('otherSet', () => {
	testVariant({
		variant: otherSet,
		options: ['other', 'set']
	});
});

import otherBeforeSet from '../../../src/methods/variants/otherBeforeSet';
import { testVariant } from '../methodTestUtility';

describe('otherBeforeSet', () => {
	testVariant({
		variant: otherBeforeSet,
		options: ['other', 'before', 'set']
	});
});

import other from '../../../src/methods/variants/other';
import { testVariant } from '../methodTestUtility';

describe('other', () => {
	testVariant({
		variant: other,
		options: ['other']
	});
});

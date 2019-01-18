import before from '../../../src/methods/variants/before';
import { testVariant } from '../methodTestUtility';

describe('before', () => {
	testVariant({
		variant: before,
		options: ['before']
	});
});

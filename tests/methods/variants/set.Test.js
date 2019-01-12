import set from '../../../src/methods/variants/set';
import { testVariant } from '../methodTestUtility';

describe('set', () => {
	testVariant({
		variant: set,
		options: ['set']
	});
});

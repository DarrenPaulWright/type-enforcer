import getSet from '../../../src/methods/variants/getSet';
import { testVariant } from '../methodTestUtility';

describe('getSet', () => {
	testVariant({
		variant: getSet,
		options: ['get', 'set']
	});
});

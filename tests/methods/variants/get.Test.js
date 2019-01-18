import get from '../../../src/methods/variants/get';
import { testVariant } from '../methodTestUtility';

describe('get', () => {
	testVariant({
		variant: get,
		options: ['get']
	});
});

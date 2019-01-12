import getBefore from '../../../src/methods/variants/getBefore';
import { testVariant } from '../methodTestUtility';

describe('getBefore', () => {
	testVariant({
		variant: getBefore,
		options: ['get', 'before']
	});
});

import beforeSet from '../../../src/methods/variants/beforeSet';
import { testVariant } from '../methodTestUtility';

describe('beforeSet', () => {
	testVariant({
		variant: beforeSet,
		options: ['before', 'set']
	});
});

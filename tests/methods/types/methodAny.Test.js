import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.any', () => {
		testMethodType({
			name: 'any',
			true: ['string', 123]
		});
	});
});

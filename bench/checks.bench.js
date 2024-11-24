import { testTypes } from 'type-enforcer-test-helper';
import { is } from '../index.js';
import { when, bench } from 'hippogriff';

/* eslint-disable no-unused-vars */
testTypes.forEach((data) => {
	when(`is.${data.name}`, () => {
		const check = is[data.name];
		const trueValue = data.true[0];
		const falseValue = data.false[0];
		const coerceTrueValue = data.coerceTrue[0];
		const coerceFalseValue = data.coerceFalse[0];

		if (data.name === 'instanceOf') {
			testTypes.forEach((innerData) => {
				const innerValue = innerData.value;

				if (innerValue) {
					const innerTrueValue = innerData.true[0];
					const innerFalseValue = innerData.false[0];

					bench(`${innerData.name} true`, () => {
						const result = check(innerTrueValue, innerValue);
					});

					bench(`${innerData.name} false`, () => {
						const result = check(innerFalseValue, innerValue);
					});
				}
			});
		}
		else {
			bench('true', () => {
				const result = check(trueValue);
			});

			bench('false', () => {
				const result = check(falseValue);
			});
		}

		if (data.coerceTrue.length !== 0) {
			bench('coerce true', () => {
				const result = check(coerceTrueValue, true);
			});
		}

		if (data.coerceFalse.length !== 0) {
			bench('coerce false', () => {
				const result = check(coerceFalseValue, true);
			});
		}
	});
});

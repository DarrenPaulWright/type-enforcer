import { testTypes } from 'type-enforcer-test-helper';
import { enforce } from '../index.js';
import { when, bench } from 'hippogriff';

/* eslint-disable no-unused-vars */
testTypes.forEach((data) => {
	when(`enforce.${data.name}`, () => {
		const enforceFunction = enforce[data.name];
		const trueValue = data.true[0];
		const falseValue = data.false[0];
		const altValue = data.true[1];
		const coerceTrueValue = data.coerceTrue[0];
		const coerceFalseValue = data.coerceFalse[0];

		if (data.name === 'instanceOf') {
			testTypes.forEach((innerData) => {
				const innerValue = innerData.value;

				if (innerValue) {
					const innerTrueValue = innerData.true[0];
					const innerFalseValue = innerData.false[0];

					bench(`${innerData.name} true`, () => {
						const result = enforceFunction(innerTrueValue, innerValue, altValue);
					});

					bench(`${innerData.name} false`, () => {
						const result = enforceFunction(innerFalseValue, innerValue, altValue);
					});
				}
			});
		}
		else {
			bench('true', () => {
				const result = enforceFunction(trueValue, altValue);
			});

			bench('false', () => {
				const result = enforceFunction(falseValue, altValue);
			});
		}

		if (data.coerceTrue.length !== 0) {
			bench('coerce true', () => {
				const result = enforceFunction(coerceTrueValue, altValue, true);
			});
		}

		if (data.coerceFalse.length !== 0) {
			bench('coerce false', () => {
				const result = enforceFunction(coerceFalseValue, altValue, true);
			});
		}
	});
});

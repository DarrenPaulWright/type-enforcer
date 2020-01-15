import { benchSettings } from 'karma-webpack-bundle';
import { testTypes } from 'type-enforcer-test-helper';
import { enforce } from '../index.js';

testTypes.forEach((data) => {
	suite(`enforce.${data.name}`, () => {
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

					benchmark(`${innerData.name} true`, () => {
						const result = enforceFunction(innerTrueValue, innerValue, altValue);
					}, benchSettings);

					benchmark(`${innerData.name} false`, () => {
						const result = enforceFunction(innerFalseValue, innerValue, altValue);
					}, benchSettings);
				}
			});
		}
		else {
			benchmark(`true`, () => {
				const result = enforceFunction(trueValue, altValue);
			}, benchSettings);

			benchmark(`false`, () => {
				const result = enforceFunction(falseValue, altValue);
			}, benchSettings);
		}

		if (data.coerceTrue.length) {
			benchmark(`coerce true`, () => {
				const result = enforceFunction(coerceTrueValue, altValue, true);
			}, benchSettings);
		}

		if (data.coerceFalse.length) {
			benchmark(`coerce false`, () => {
				const result = enforceFunction(coerceFalseValue, altValue, true);
			}, benchSettings);
		}
	});
});

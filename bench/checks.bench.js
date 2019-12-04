import { benchSettings } from 'karma-webpack-bundle';
import { testTypes } from 'type-enforcer-test-helper';
import { is } from '../index';

testTypes.forEach((data) => {
	suite(`is.${data.name}`, () => {
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

					benchmark(`${innerData.name} true`, () => {
						const result = check(innerTrueValue, innerValue);
					}, benchSettings);

					benchmark(`${innerData.name} false`, () => {
						const result = check(innerFalseValue, innerValue);
					}, benchSettings);
				}
			});
		}
		else {
			benchmark(`true`, () => {
				const result = check(trueValue);
			}, benchSettings);

			benchmark(`false`, () => {
				const result = check(falseValue);
			}, benchSettings);
		}

		if (data.coerceTrue.length) {
			benchmark(`coerce true`, () => {
				const result = check(coerceTrueValue, true);
			}, benchSettings);
		}

		if (data.coerceFalse.length) {
			benchmark(`coerce false`, () => {
				const result = check(coerceFalseValue, true);
			}, benchSettings);
		}
	});
});

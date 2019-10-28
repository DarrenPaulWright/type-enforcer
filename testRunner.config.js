module.exports = [{
	type: 'src',
	files: [
		'src/**/*.js'
	]
}, {
	type: 'helper',
	files: [
		'tests/TestUtil.js',
		'tests/testValues.js',
		'tests/compareValues.js',
		'tests/isTestUtility.js',
		'tests/enforceTestUtility.js',
		'tests/methodTestUtility.js'
	]
}, {
	type: 'specs',
	files: [
		'tests/**/*.Test.js'
	]
}];

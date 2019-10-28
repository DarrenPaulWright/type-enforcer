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
		'tests/equality/compareValues.js',
		'tests/enforcer/enforceTestUtility.js',
		'tests/methods/methodTestUtility.js'
	]
}, {
	type: 'specs',
	files: [
		'tests/**/*.Test.js'
	]
}];

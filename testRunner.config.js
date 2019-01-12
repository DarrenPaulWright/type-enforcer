module.exports = [{
	type: 'css',
	files: [
		'tests/test.css'
	]
}, {
	type: 'src',
	files: [
		'src/**/*.js'
	]
}, {
	type: 'helper',
	files: [
		'tests/TestUtil.js',
		'tests/enforcer/enforceTestUtility.js',
		'tests/methods/methodTestUtility.js'
	]
}, {
	type: 'specs',
	files: [
		'tests/**/*.Test.js'
	]
}];

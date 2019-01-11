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
		'tests/enforcer/enforceTestUtility.js'
	]
}, {
	type: 'specs',
	files: [
		'tests/**/*.Test.js'
	]
}];

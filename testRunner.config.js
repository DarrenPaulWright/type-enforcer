module.exports = [{
	type: 'src',
	files: [
		'index.js',
		'src/**/*.js'
	]
}, {
	type: 'helper',
	files: [
		'tests/testValues.js',
		'tests/compareValues.js'
	]
}, {
	type: 'specs',
	files: [
		'tests/**/*.Test.js'
	]
}];

export default (value, min, max) => value < min ? min : max < value ? max : value;

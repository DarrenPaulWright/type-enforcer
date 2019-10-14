export default (value, min, max) => value < min ? min : value > max ? max : value;

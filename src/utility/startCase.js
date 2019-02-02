export default (string) => string.split(' ').map((word) => word.charAt(0).toUpperCase()).join(' ');

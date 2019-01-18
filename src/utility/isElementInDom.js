
const isElementInDom = (element) => {
	return !element ? false : (element === document || isElementInDom(element.parentNode));
};

export default isElementInDom;

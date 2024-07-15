/**
 * Substring from to end
 * @param {Number} start
 * @param {Number} end
 * @param {String} newString
 */
const subString = (start, end, newString = "") => {
  return newString.substring(start, end);
};

export { subString };

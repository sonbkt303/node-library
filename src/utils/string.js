/**
 * Substring from to end
 * @param {Number} start
 * @param {Number} end
 * @param {String} newString
 */
const subString = (start, end, newString = "") => {
  return newString.substring(start, end);
};


const removeSpecialCharacter = (string = "") => {
  if(typeof string !== "string") {
    return "";
  }
  return string?.replace(/[-~!@#$%^&*()_=+{}\[\]:";'<>,\.?\/\\\|]/g, "");
};

export { subString, removeSpecialCharacter };

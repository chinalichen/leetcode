/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let code = 0;

  for (let i = 0; i < s.length; i++) {
    code ^= s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i++) {
    code ^= t.charCodeAt(i);
  }
  return String.fromCharCode(code);
};

module.exports = findTheDifference;
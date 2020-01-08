/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bc = 0;
  let cc = 0;
  const sm = {};

  for (let i = 0; i < secret.length; i++) {
    const s = secret[i];
    const g = guess[i];
    if (s === g) {
      continue;
    }
    sm[s] = sm[s] ? sm[s] + 1 : 1;
  }

  for (let i = 0; i < secret.length; i++) {
    const s = secret[i];
    const g = guess[i];
    if (s === g) {
      bc++;
      continue;
    }
    if (sm[g] == null) {
      continue;
    }
    if (sm[g] === 0) {
      continue;
    }
    sm[g]--;
    cc++;
  }

  return `${bc}A${cc}B`;
};

module.exports = getHint;

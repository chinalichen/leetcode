/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const map = {};
  for (let i = 0; i < cpdomains.length; i++) {
    const word = cpdomains[i];
    const [countStr, domainStr] = word.split(' ');
    const count = parseInt(countStr, 10);
    let domain = domainStr;
    let start = -1;
    do {
      domain = domain.slice(start + 1);
      map[domain] = map[domain] ? map[domain] + count : count;
      start = domain.indexOf('.');
      if (start === -1) {
        break;
      }
    } while (true);
  }
  const result = [];
  for (let k in map) {
    result.push(`${map[k]} ${k}`);
  }
  return result;
};

module.exports = subdomainVisits;

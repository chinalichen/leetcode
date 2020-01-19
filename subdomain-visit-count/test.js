const subdomainVisits = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"], input: ["9001 discuss.leetcode.com"] },
  { expect: ["901 mail.com", "50 yahoo.com", "900 google.mail.com", "5 wiki.org", "5 org", "1 intel.mail.com", "951 com"], input: ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"] },
];

dataTable.forEach(({ expect, input }, i) => {
  assert.deepEqual(expect, subdomainVisits(input), `subdomainVisits ${i}:`);
});

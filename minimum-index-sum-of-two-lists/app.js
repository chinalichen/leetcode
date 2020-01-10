/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  if (list1.length > list2.length) {
    return findRestaurant(list2, list1);
  }
  const m1 = {};
  for (let i = 0; i < list1.length; i++) {
    const str = list1[i];
    m1[str] = i;
  }

  const result = [];
  let min = 9999999;
  for (let i = 0; i < list2.length; i++) {
    const str = list2[i];
    if (m1[str] == null) {
      continue;
    }
    const sum = m1[str] + i;
    if (min > sum) {
      result.length = 0;
      result.push(str);
      min = sum;
      continue;
    }
    if (min === sum) {
      result.push(str);
    }
  }
  return result;
};

module.exports = findRestaurant;
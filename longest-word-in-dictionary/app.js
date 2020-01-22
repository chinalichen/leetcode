/**
 * @param {string[]} words
 * @return {string}
 */

function getMap(word, lm = {}) {
    for (let j = 0; j < word.length; j++) {
        const c = word[j];
        lm[c] = lm[c] ? lm[c] + 1 : 1;
    }
    return lm;
}

var longestWord = function (words) {
    let lm = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        lm = getMap(word, lm)
    }

    const result = [];
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const sub = getMap(word, {})
        let count = 0;
        for (let k in sub) {
            if (sub[k] * 2 > lm[k]) {
                count++;
            }
            if (count > 1) {
                break;
            }
        }
        if (count <= 1) {
            result.push(word);
            if (word.length > max) {
                max = word.length;
            }
        }
    }

    return result.filter(w => w.length === max).sort()[0];
};

module.exports = longestWord;

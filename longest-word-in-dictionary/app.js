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

function has(wordsMap, word) {
    if (!wordsMap[word]) {
        return false;
    }
    const sub = word.slice(0, -1);
    if (sub.length < 1) {
        return true;
    }
    return has(wordsMap, sub);
}

var longestWord = function (words) {
    const wm = getMap(words, {})

    let maxWord = '';
    words.sort().forEach((w) => {
        if (!has(wm, w)) {
            return;
        }
        if (maxWord.length < w.length) {
            maxWord = w;
            return;
        }
        if (maxWord > w) {
            return;
        }
    });
    return maxWord;
};

module.exports = longestWord;

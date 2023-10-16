// Product of Nums
function product(arr, i = 0) {
    if (i === arr.length) return 1;
    return arr[i] * product(arr, i + 1);
}

// Longest Word
function longest(words) {
    if (words.length === 0) return 0;
    const firstWordLength = words[0].length;
    const restWordsLength = longest(words.slice(1));
    return Math.max(firstWordLength, restWordsLength);
}

// Every Other Character
function everyOther(str) {
    if (str.length < 2) return str;
    return str[0] + everyOther(str.slice(2));
}

// Is Palindrome
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    }
    return false;
}

// Find Index
function findIndex(arr, str, index = 0) {
    if (index === arr.length) return -1;
    if (arr[index] === str) return index;
    return findIndex(arr, str, index + 1);
}

// Reverse String
function revString(str) {
    if (str === "") return "";
    return revString(str.substr(1)) + str[0];
}

// Gather Strings
function gatherStrings(obj) {
    let strings = [];
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            strings.push(obj[key]);
        } else if (typeof obj[key] === "object") {
            strings = strings.concat(gatherStrings(obj[key]));
        }
    }
    return strings;
}

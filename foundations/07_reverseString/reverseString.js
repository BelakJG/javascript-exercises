const reverseString = function(wordToRev) {
    let tempArr = wordToRev.split("").reverse();
    return tempArr.join("");
};

// Do not edit below this line
module.exports = reverseString;

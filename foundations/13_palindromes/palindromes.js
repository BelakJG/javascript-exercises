const palindromes = function (phrase) {
 let trimmedStr = phrase.replace(/[^a-zA-Z0-9 ]/g, "");
 trimmedStr = trimmedStr.replaceAll(" ", "");
 trimmedStr = trimmedStr.toLowerCase();
 let reversed = trimmedStr.split("").reverse().join("");

 return trimmedStr == reversed;
};

// Do not edit below this line
module.exports = palindromes;

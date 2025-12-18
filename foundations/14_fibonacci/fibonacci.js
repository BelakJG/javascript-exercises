const fibonacci = function(limit) {
    if (limit < 0) {
        return "OOPS";
    }
    first = 0;
    second = 1
    for (let i = 1; i <= limit; i++) {
        let tempNum = second;
        second += first;
        first = tempNum;
    }
    return first;
};

// Do not edit below this line
module.exports = fibonacci;

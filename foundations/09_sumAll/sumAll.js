const sumAll = function(start, end) {
    if (!typeof start === "number" || !typeof end === "number") {
        return "ERROR";
    }
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    let higher = 99999999;
    let lower = 0;

    if (start < end) {
        lower = start;
        higher = end;
    } else {
        lower = end;
        higher = start;
    }

    let sum = higher;
    for (let i = lower; i < higher; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(arr, ...num) {
    let filteredArr = [];

    arr.forEach((item) => {
        if (!num.includes(item)) {
            filteredArr.push(item);
        }
    });

    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;

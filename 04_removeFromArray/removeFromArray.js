const removeFromArray = function(...args) {
    // load values into args
    const array =args[0];
    newArray = array.filter(function(item) {
        if (!args.includes(item)) return item;
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

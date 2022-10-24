const removeFromArray = function(...args) {
    // load values into args
    const array = args[0];
    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

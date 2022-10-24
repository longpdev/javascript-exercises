const removeFromArray = function(...args) {
    const array = args[0];
     newArray = [];
    newArray = array.filter(item => !args.includes(item));
    //filter prototype
    // item is an element in array, filter through the array 
    // with the condition: !args.includes(item)
    return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;

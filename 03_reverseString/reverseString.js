const reverseString = function(string) {
    splitString = string.split("    ");
    // hello -> [h,e,l,l,o]
    reverseArray = splitString.reverse();
    // reverse the array
    joinedArray = reverseArray.join("");
    return joinedArray  ;
};

// Do not edit below this line
module.exports = reverseString;

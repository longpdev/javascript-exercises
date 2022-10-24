const repeatString = function(string, n) {
    newString ="";
    if (n < 0) {
        return `ERROR`;
    }
    while(n--)  newString += string;
    return newString;
};

// Do not edit below this line
module.exports = repeatString;

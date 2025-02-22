const sumAll = function(num1, num2) {
    finalSum = 0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return `ERROR`;
    if (num1 < 0 || num2 < 0) return 'ERROR';
    largeNumber = num1>num2? num1: num2;
    smallNumber = num1 + num2 - largeNumber;
    for (i = smallNumber; i <= largeNumber; i++){
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

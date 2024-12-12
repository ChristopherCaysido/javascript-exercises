const reverseString = function(string) {
    const stringArray = string.split("")
    const reversedStringArray = stringArray.toReversed()
    const reverseString = reversedStringArray.join("")
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;

const sumAll = function(num1,num2) {
    //Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:
    // two positive integer inputs
    // if is a negative number return error
    let leftNum, rightNum
    let finalSum = 0
    leftNum = num1
    rightNum = num2
    if(leftNum < 0 || rightNum < 0){
        return "ERROR"
    }
    if(isNaN(leftNum) || isNaN(rightNum)){
        return "ERROR"
    }
    if(!Number.isInteger(leftNum) || !Number.isInteger(rightNum)){
        return "ERROR"
    }

    if(leftNum > rightNum){
        let placeholder = 0
        placeholder = leftNum
        leftNum = rightNum
        rightNum = placeholder
    }
    
    for(let i = leftNum; i <= rightNum ; i++){
        finalSum += i
    }
    return finalSum
};

sumAll(1,10)

// Do not edit below this line
module.exports = sumAll;

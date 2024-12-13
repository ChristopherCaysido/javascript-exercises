const removeFromArray = function(arr,...items) {
    let finalArray
    items.forEach((item)=>{
        if(!arr.includes(item)){
            finalArray = arr
            return
        }
        while(arr.includes(item)){
            const index = arr.indexOf(item)
            arr.splice(index,1)
        }
        finalArray = arr
    })
    return finalArray
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;

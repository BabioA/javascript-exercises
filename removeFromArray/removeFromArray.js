const removeFromArray = function(ary, ...other) {
    let result = [];
    for (i = 0;i < ary.length; i++ )
        if (!other.includes(ary[i])) {
            result.push(ary[i]);
        }
    return result;
}

module.exports = removeFromArray

// if (num === othernum); {
//    removeFromArray.pop(num,othernum);
// }
// si me concentro me distraigo


// for (i = 0;i < array.length; i++ ) {
//    if (array[i] === othernum) {
//		array.filter(array[i]);
//        }
//    return array;
//    }
    
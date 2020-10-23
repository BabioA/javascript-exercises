const sumAll = function(num1,num2) {
    let start;
    let end;
    if (num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    if (typeof num1 != "number" || typeof num2 != "number"){
        return 'ERROR'
    }
    if (num1 < num2){
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }
    let result = 0;
    for (i = start; i <= end; i++){
        result += i;
    }
    return result;
}

module.exports = sumAll

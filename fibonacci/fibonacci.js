const fibonacci = function(num) {
    num = Number(num)
    let var1 = 1;
    let var2 = 1;
    let sum = 1;
    if (num < 0) {
        return "OOPS";
    } 
    for (i = 2; i < num ;i++) {
        sum = var1 + var2;
        var1 = var2; 
        var2 = sum; 
    }
    
    return sum
}

module.exports = fibonacci

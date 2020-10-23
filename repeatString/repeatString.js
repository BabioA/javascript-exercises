const repeatString = function(text,count) {
    let result = ""; 
    for (i=0;i < count; i++){
        result += text;
    }
    if (count < 0) {
        return 'ERROR';
    } 
    return result;
};

module.exports = repeatString

const reverseString = function(text) {
    let result = "";
    let r = 1;
    for (i = 0; i < text.length; i++){
        result += text.charAt(text.length - r);
        r++;
    }
    return result;
}

module.exports = reverseString

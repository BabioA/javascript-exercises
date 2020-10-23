const palindromes = function(text) {
    text = text.replace(/\W/g, "").toLowerCase();
    let r = 1;
    let revString = "";
    for (i = 0; i < text.length; i++){
        revString += text.charAt(text.length - r);
        r++;
    }
    if (revString === text){
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes

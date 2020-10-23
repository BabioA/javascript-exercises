const caesar = function(text, shift) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = ""
    for(i = 0; i < text.length; i++) {
        let newChar = letters.indexOf(text[i].toUpperCase()); 
        newChar = (newChar + shift) % 26;
        if (newChar < 0) {
            newChar += 26;
        }
        let regex = /\W/;
        if (text[i].match(regex)) {
            result += text[i]
        } else if (letters.includes(text[i])) {
            result += letters[newChar]
        } else {
            result += letters[newChar].toLowerCase();
        }
    }
    return result;
}
module.exports = caesar

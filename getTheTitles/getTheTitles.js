const getTheTitles = function(books) {
    const book = books.map(books => books.title)
    return book;
}

module.exports = getTheTitles;

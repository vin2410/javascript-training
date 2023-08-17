let Books = [{
    'title': 'The Hobbit',
    'author': 'J.R.R. Tolkien',
    'already_read': false
},
{
    'title': 'The Lord of the Rings',
    'author': 'J.R.R. Tolkien',
    'already_read': false
}]

for (let i = 0; i < Books.length; i++) {
    let Book = Books[i];
    let BookData = Books[i].title + ' by ' + Books[i].author;
    if (BookData.already_read) {
        console.log("You already read");
    } else {
        console.log("You still need to read " + BookData);
    }
}
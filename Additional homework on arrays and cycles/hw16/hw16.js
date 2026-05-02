let books = [
    {name:'Harry Potter', pageCount: 320, author: 'Joanne Rowling', genre: 'fantasy' },
    {name:'The Lord of the Rings', pageCount: 704, author: 'John Ronald Tolkien', genre: 'fantasy'},
    {name: 'A Tale of Two Cities', pageCount: 576, author: 'Charles Dickens', genre: 'roman'}
];
for (let book of books){
    if (book.pageCount > 576){
        console.log(book);
    }
}


for (let book of books){
    if (book.genre <'roman'){
        console.log(book);
    }
}


for (let book of books){
    if (book.name > 'Harry Potter'){
        console.log(book);
    }
}


for (let book of books){
    if (book.author > 3){
        console.log(book);
    }
}


for (let book of books){
    if (book.author){
        console.log(book);
    }
}
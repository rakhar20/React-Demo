import React from 'react';

const books=[{title:"Yugandhar",author:"Shivaji Sawant",genre:"Mythological"},{title:"Mrityunjay",author:"Shivaji Sawant",genre:"Mythological"}]
function BookList(props) {
  return (
    <div>
        <h1>Book List</h1>
        {books.map((book,index)=>(
            <div key={index}>
                <h2>Title: {book.title}</h2>
                <h2>Author: {book.author}</h2>
                <h2>Genre: {book.genre}</h2>
                <br></br>
            </div>
        ))}
    </div>
  );
}

export default BookList;

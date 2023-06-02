import React, { useState } from 'react';
import './App.css';
import BookCreate from './BookComponents/BookCreate';
import BookList from "./BookComponents/BookList";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title){
    console.log(title)

    const updatedBooks = [...books, title];
    setBooks(updatedBooks)

  }
  return (
    <div>
      <BookCreate onCreate={createBook} />
      <BookList bookList={books} />
      {books}
    </div>
  );
}

export default App;

//onCreat is not a function

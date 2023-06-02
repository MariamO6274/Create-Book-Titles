import React from 'react';
import './App.css';
import BookCreate from './BookComponents/BookCreate';
import BookList from "./BookComponents/BookList";


function App() {

  function createBook(){

  }
  return (
    <div>
      <BookCreate onCreate={createBook} />
      <BookList />
    </div>
  );
}

export default App;

//book creat can have prop
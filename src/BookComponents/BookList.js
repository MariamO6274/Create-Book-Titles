import React from 'react'
import BookShow from './BookShow'

function BookList({ bookList }) {
  // const bookTitleList = [];

  // for (let i = 0; i < title.length; i++) {
  //   bookTitleList.push(title[i]);

  //   console.log(title[i]);
  // }
  return (
    <div>
      
      {bookList}
      <br/>
      <BookShow/>
    </div>
  );
}

export default BookList
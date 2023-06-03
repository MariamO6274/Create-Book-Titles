import React from 'react'
import BookShow from './BookShow'

function BookList({ bookList }) {
  const bookTitleList = [];

  
 for (let i = 0; i < bookList.length; i++) {
   bookShowList.push(<BookShow book={bookList[i]} />);
 }

  return (
    <div>
      
      {bookList}
      <br/>
      <BookShow/>
    </div>
  );
}

export default BookList
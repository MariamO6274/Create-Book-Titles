import React from 'react'
import BookShow from './BookShow'

function BookList({ bookList, onDelete }) {
  const bookTitleList = [];

  for (let i = 0; i < bookList.length; i++) {
    bookTitleList.push(<BookShow book={bookList[i]} onDelete={onDelete} />);
  }

  return (
    <div>
      {bookTitleList}
      <br />
      {/* <BookShow /> */}
    </div>
  );
}

export default BookList
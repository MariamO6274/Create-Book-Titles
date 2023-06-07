import React from "react";
import BookShow from "./BookShow";

function BookList({ bookList, updateBook }) {
  return (
    <div className="bookDiv">
      {bookList.map((book) => {
        return (
          <BookShow book={book}  updateBook={updateBook} />
        );
      })}
    </div>
  );
}

export default BookList;

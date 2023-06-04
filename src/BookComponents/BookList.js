import React from "react";
import BookShow from "./BookShow";

function BookList({ bookList, onDelete, updateBook }) {
  return (
    <div className="bookDiv">
      {bookList.map((book) => {
        return (
          <BookShow book={book} onDelete={onDelete} updateBook={updateBook} />
        );
      })}
    </div>
  );
}

export default BookList;

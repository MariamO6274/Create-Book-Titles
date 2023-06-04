import React, { useState } from "react";
import BookEdit from "./BookEdit";
import "../App.css";

function BookShow({ book, onDelete, updateBook }) {
  const [isEdit, setIsEdit] = useState();
  return (
    <div
      className="buttonDiv"
      // style={{ display: "flex", flexDirection: "row", gap: "10px" }}
      key={book.id}
    >
      {isEdit ? (
        <BookEdit book={book} updateBook={updateBook} setIsEdit={setIsEdit} />
      ) : (
        <div>{book.title}</div>
      )}
      {!isEdit && (
        <button
          className="delete"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
      )}
      {!isEdit && (
        <button
          className="delete"
          onClick={() => {
            onDelete(book.id);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default BookShow;

// BUGS
// when you create many book with same titels and you want to delete one, on 1 click evrything gets deleted
// if it is a same name use filter->

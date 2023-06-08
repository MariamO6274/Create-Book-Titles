import React, { useState } from "react";
import BookEdit from "./BookEdit";
import "../App.css";

import { useContext } from "react";
import BooksContext from "../BookContext";

function BookShow({ book, updateBook }) {


  //let's write her context value
  const val = useContext(BooksContext);
  console.log(val);



  
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
          className="edit"
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
            val.deleteBookUsingContext(book.id);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default BookShow;


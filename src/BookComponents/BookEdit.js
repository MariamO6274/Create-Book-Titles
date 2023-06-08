import React, { useState } from "react";
import { useContext } from "react";
import BooksContext from "../BookContext";





function BookEdit({ book, updateBook, setIsEdit }) {
//same const val or const value?  what about let same thing???
    const value = useContext(BooksContext);
    console.log(value);


  const [newValue, setNewValue] = useState("");
  const handleEdit = () => {
    setIsEdit(false);
    value.updateBook(book.id, newValue);
  };

  function handleChange(eventDetails) {
    setNewValue(eventDetails.target.value);
  }
  return (
    <div>
      <div>{book.title}</div>
      <input value={newValue} onChange={handleChange} />
      <button onClick={handleEdit}>
        Save
      </button>
      <button
        onClick={() => {
          setIsEdit(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default BookEdit;



import React, { useState } from "react";

function BookEdit({ book, updateBook, setIsEdit }) {
  const [newValue, setNewValue] = useState("");
  const handleEdit = () => {
    setIsEdit(false);
    updateBook(book.id, newValue);
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



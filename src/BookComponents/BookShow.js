import React from 'react'

function BookShow({ book, onDelete }) {

function handleDeleteClick(){
  onDelete(book);
}

  return (
    <div>
      <br />
      {book}
      <button>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default BookShow
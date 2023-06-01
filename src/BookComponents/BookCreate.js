import React, { useState } from "react";

function BookCreate() {
  const [bookTitle, setBookTitle] = useState("");

  function handleChange(eventDetails) {
    setBookTitle(eventDetails.target.value);
  }

  function handleSubmit(eve){
eve.preventDeafault();
  }

  return (
    <>
      Add Book
      <br />
      Title
      <br />
      <form onSubmit={handleSubmit}>
        <input value={bookTitle} onChange={handleChange}></input>
        <button>Add</button>
      </form>
    </>
  );
}

export default BookCreate;

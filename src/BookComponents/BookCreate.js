import React, { useState } from "react";
import "../App.css";

function BookCreate({ onCreate }) {
  const [bookTitle, setBookTitle] = useState("");

  function handleChange(eventDetails) {
    setBookTitle(eventDetails.target.value);
  }

  function handleSubmit(eve) {
    eve.preventDefault();
    onCreate(bookTitle);
    setBookTitle("");
  }

  return (
    <>
      <h1> Add Book Title</h1>
      
      <form onSubmit={handleSubmit}>
        <input className="inputBar" value={bookTitle} onChange={handleChange}></input>
        <button className="button">Submit</button>
      </form>
    </>
  );
}

export default BookCreate;



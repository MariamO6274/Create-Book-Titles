import React, { useState } from "react";

function BookCreate({onCreate}) {
  const [bookTitle, setBookTitle] = useState("");

  function handleChange(eventDetails) {
    setBookTitle(eventDetails.target.value);
  }

  function handleSubmit(eve) {
    eve.preventDefault();
  }

  function handleClick() {
    onCreate(bookTitle);
  }

  return (
    <>
      Add Book
      <br />
      Title
      <br />
      <form onSubmit={handleSubmit}>
        <input value={bookTitle} onChange={handleChange}></input>
        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  );
}

export default BookCreate;

//react control element, (1st step make state,2.onChange-eventhandeler, evry time something changes,..new enterd value in input, setBookTitle gets updated(targetit da valuti)) line21, when we use state variable to set value at of a html element
//during re render process rthis value gets updatet automaticlly, bc state gets updated-value gets updatet
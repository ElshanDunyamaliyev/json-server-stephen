import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={formSubmitHandler}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleInputChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;

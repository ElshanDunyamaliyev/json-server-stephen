import React, { useState } from "react";

const BookEdit = ({ book, onUpdate, setShowEdit }) => {
  const [title, setTitle] = useState(book.title);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onUpdate(title, book.id);
    setShowEdit(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Title</label>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: "5px" }}
      />
      <button className="button">Save</button>
    </form>
  );
};

export default BookEdit;

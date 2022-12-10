import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {showEdit ? (
        <BookEdit book={book} onUpdate={onUpdate} setShowEdit={setShowEdit} />
      ) : (
        book.title
      )}
      <div className="actions">
        <button
          className="edit"
          onClick={() => setShowEdit((prevVal) => !prevVal)}
        >
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;

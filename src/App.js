import React, { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    // setBooks((prevBooks) => [
    //   ...prevBooks,
    //   { id: Math.round(Math.random() * 9999), title },
    // ]);

    setBooks((prevBooks) => [...prevBooks, response.data]);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks((prevBooks) =>
      prevBooks.filter((book) => {
        return book.id !== id;
      })
    );
  };

  const updateBook = async (title, id) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      })
    );
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onUpdate={updateBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;

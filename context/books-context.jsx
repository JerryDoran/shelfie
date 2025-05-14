import { createContext, useState } from 'react';

const DATABASE_ID = '682507be001e60d1212e';
const COLLECTION_ID = 'books';

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  async function createBook(data) {
    try {
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteBook(id) {
    try {
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBookById,
        fetchBooks,
        createBook,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

import { createContext, useState } from 'react';
import { databases } from '../lib/appwrite';
import { ID, Permission, Role } from 'react-native-appwrite';
import { useUser } from '../hooks/use-user';

const DATABASE_ID = '682507be001e60d1212e';
const COLLECTION_ID = 'books';

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

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
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
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

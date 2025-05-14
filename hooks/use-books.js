import { useContext } from 'react';
import { BooksContext } from '../context/books-context';

export function useBooks() {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }

  return context;
}
// This hook provides access to the books context, allowing components to access books data and functions.
// It throws an error if used outside of a BooksProvider, ensuring that the context is always available when needed.
// This is useful for managing books state and actions throughout the application.
// The useBooks hook simplifies the process of accessing books-related data and functions, making it easier to manage books state in a React application.
// It is a custom hook that provides access to the books context, allowing components to access books data and functions.

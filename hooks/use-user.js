import { useContext } from "react";
import { UserContext } from "../context/user-context";


export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
// This hook provides access to the user context, allowing components to access user data and authentication functions.
// It throws an error if used outside of a UserProvider, ensuring that the context is always available when needed.
// This is useful for managing user authentication state and actions throughout the application.
// The useUser hook simplifies the process of accessing user-related data and functions, making it easier to manage user authentication and state in a React application.
// It is a custom hook that provides access to the user context, allowing components to access user data and authentication functions.
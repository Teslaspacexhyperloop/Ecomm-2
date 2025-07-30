import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
// AuthContext is created using createContext(), which returns an object with Provider and Consumer properties.
// AuthContext.Provider is used to wrap the component tree and provide the context value.

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  //     useState: This hook initializes the auth state with user as null and token as an empty string.

  // Setting Axios Defaults: The Authorization header is set to the auth.token value by default. This ensures that all axios requests will include the token in the header if it's available.

  // useEffect: This hook runs once the component mounts and whenever the auth state changes.

  // It retrieves auth data from localStorage.
  // If auth data exists in localStorage, it parses the data and updates the auth state with the user and token information.
  // The dependency array [auth] ensures this effect runs whenever the auth state changes.
  // Return: The AuthContext.Provider component wraps the children components, providing them access to the auth state and the setAuth function.

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth, //spreading create a shallow copy
        user: parseData.user,
        token: parseData.token,
        //         Even though you know the auth state only contains user and token properties, using the spread operator (...auth) ensures that you are creating a new state object that includes all existing properties, along with any updates or additions you make.

        // Here are some reasons for using this pattern:

        // Future-Proofing:

        // If the auth state is later expanded to include more properties (e.g., isAuthenticated, roles, permissions), the spread operator ensures that these properties are preserved when updating the state.
      });
    }
  }, [auth]); //auth is our dependency
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>

    // Providing Context Value:

    // The AuthContext.Provider component takes a value prop. This prop is the context value that you want to make available to all child components that consume this context.
    // In this case, value is an array [auth, setAuth], where:
    // auth is the current state of authentication, containing user and token information.
    // setAuth is the state updater function provided by the useState hook.
    // Rendering Children:

    // {children} represents all the components nested inside the AuthContext.Provider.
    // By placing components inside the AuthContext.Provider, those components (and their descendants) can access the context value through the context consumer or a custom hook like useAuth.
  );
};

//custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

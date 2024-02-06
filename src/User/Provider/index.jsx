import { createContext, useContext, useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { getUserData } from "../graph"; // Replace with your actual function to fetch user data

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

import PropTypes from 'prop-types';


UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export function UserProvider({ children }) {
  const { accounts, inProgress, instance } = useMsal();
  const [userData, setUserData] = useState({});
  const isAuthenticated = accounts.length > 0;

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (isAuthenticated && inProgress === "none") {
          const userData = await getUserData(instance);
          setUserData(userData);
        }
      } catch (error) {
        console.error("Error while fetching user data:", error);
      }
    }

    fetchUserData();
  }, [isAuthenticated, inProgress, instance]);

  return (
    <UserContext.Provider value={{ userData }}>
      {children}
    </UserContext.Provider>
  );
}

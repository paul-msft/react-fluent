import React from 'react';
import { useEffect } from 'react';
import {createBrowserRouter,useNavigate } from "react-router-dom";
// import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import PropTypes from 'prop-types';
import Home from "../Home";
import OopsPage from '../OopsPage';
import API from '../API';
import GuildGPT from '../GuildGPT';
import Navigation from '../Navigation';
import Footer from '../Footer';

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
};

function ProtectedRoute({ children }) {
//   const isAuthenticated = useIsAuthenticated();
//   const { inProgress } = useMsal();
  const navigate = useNavigate();

  // useEffect(() => {
  //   //   if (!isAuthenticated && inProgress === "none") {
  //   //     navigate('/');
  //   //   }
  //   isAuthenticated = true; // TODO: remove this line
  //   inProgress = "none"; // TODO: remove this line
  //   }, [isAuthenticated, navigate, inProgress]);

  // if(!isAuthenticated) {
  //   return null;
  // }

  return (
    <React.Fragment>
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <OopsPage/>
    },
    {
      path: "/guild-gpt",
      element: <ProtectedRoute><GuildGPT/></ProtectedRoute>,
      errorElement: <OopsPage/>
    },
    {
      path: "/api",
      element: <ProtectedRoute><API/></ProtectedRoute>,
      errorElement: <OopsPage/>
    } 
]);
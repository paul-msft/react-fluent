import React from 'react';
import { useEffect } from 'react';
import {createBrowserRouter,useNavigate } from "react-router-dom";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import PropTypes from 'prop-types';
import Home from "../Home";
import OopsPage from '../OopsPage';
import API from '../API';
import About from '../About';
import Navigation from '../Navigation';
import Footer from '../Footer';

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
};

function ProtectedRoute({ children }) {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress } = useMsal();
  const navigate = useNavigate();

  useEffect(() => {
      if (!isAuthenticated && inProgress === "none") {
        navigate('/');
      }
    }, [isAuthenticated, navigate, inProgress]);

  if(!isAuthenticated) {
    return null;
  }

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
        element: <Home/>,
        errorElement: <OopsPage/>
    },
    {
      path: "/api",
      element: <ProtectedRoute><API/></ProtectedRoute>,
      errorElement: <OopsPage/>
    },
    {
      path: "/about",
      element: <About/>,
      errorElement: <OopsPage/>
    }
]);
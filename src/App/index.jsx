import { router } from './routes';
// import { MsalProvider } from "@azure/msal-react";
// import createMsalInstance from "./authConfig";
import { RouterProvider } from "react-router-dom";
// import { UserProvider } from '../User/Provider';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import './global.css';

export default function App() {
  // const msalInstance = createMsalInstance();
  return (
    <FluentProvider theme={teamsLightTheme} style={{background:'transparent'}}>
      {/* <MsalProvider instance={msalInstance}> */}
        {/* <UserProvider> */}
          <RouterProvider router={router} />
        {/* </UserProvider> */}
      {/* </MsalProvider> */}
    </FluentProvider>
  );
}
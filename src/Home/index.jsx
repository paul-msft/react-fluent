import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Navigation from "../Navigation";
import { Display, Spinner, Button, Card, Title3, Title2 } from "@fluentui/react-components";
import { useEffect } from "react"
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../App/authConfig";
import { useUser } from "../User/Provider"

export default function Home() {

    const isAuthenticated = useIsAuthenticated();
    const { userData } = useUser();
    const { instance: msalInstance, inProgress } = useMsal();

    useEffect(() => {
        if (!isAuthenticated && inProgress === "none") {
            const accounts = msalInstance.getAllAccounts();
            if (accounts.length > 0) {
                msalInstance.setActiveAccount(accounts[0]);
            }
        }
    }, [msalInstance, isAuthenticated, inProgress]);

    const handleLogin = async () => {
        msalInstance.loginRedirect(loginRequest());
    }

    function isLoggingIn() {
        return inProgress && (inProgress === "login" || inProgress === "handleRedirect");
    }

    function isLoggingOut() {
        return inProgress && inProgress === "logout";
    }

    return (
        <>
           
            {inProgress === "none" && !isAuthenticated &&
                <div className={styles.loginContainer}>
                    <Card>
                        <Title3>Paul's Fluent React App</Title3>
                        <p>Login with your MSAL account</p>
                        <Button appearance="primary" onClick={handleLogin}>Login</Button>
                    </Card>
                </div>
            }

            {isLoggingIn() &&
                <div className={styles.loginContainer}>
                    <Spinner />
                    <p>Logging in...</p>
                </div>
            }

            {isLoggingOut() &&
                <div className={styles.loginContainer}>
                    <Spinner />
                    <p>Logging out...</p>
                </div>
            }

            {isAuthenticated && userData && !isLoggingIn() && 
                <>
                    <Navigation />
                   
                    {!userData.givenName &&
                     <div className={styles.contentContainer}>
                        <Spinner />
                    </div>
                    }
                    {userData.givenName &&
                        <>
                            <div className={styles.hero}>
                                <div className={styles.contentContainer}>
                                    <Display>Welcome, {userData.givenName}!</Display>
                                    <Title2>This is Paul's Fluent UI React App.</Title2>
                                    <p>Click on the <Link to="/api">API</Link> tab to test the API communication.</p>
                                </div>
                            </div>
                        </>
                    }             
                </>
            }
        </>
    )
}
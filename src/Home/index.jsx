import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Navigation from "../Navigation";
import { Display, Spinner, Button, Card, Title3, Title2 } from "@fluentui/react-components";
import { useEffect } from "react"
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../App/authConfig";
import { useUser } from "../User/Provider"
import normalizeImage from './normalize.png';

export default function Home() {

    // const isAuthenticated = useIsAuthenticated();
    // const { userData } = useUser();
    // const { instance: msalInstance, inProgress } = useMsal();
    const name = "Paul"; //TODO: Remove this line

    // useEffect(() => {
    //     if (!isAuthenticated && inProgress === "none") {
    //         const accounts = msalInstance.getAllAccounts();
    //         if (accounts.length > 0) {
    //             msalInstance.setActiveAccount(accounts[0]);
    //         }
    //     }
    // }, [msalInstance, isAuthenticated, inProgress]);

    // const handleLogin = async () => {
    //     msalInstance.loginRedirect(loginRequest());
    // }

    // function isLoggingIn() {
    //     return inProgress && (inProgress === "login" || inProgress === "handleRedirect");
    // }

    // function isLoggingOut() {
    //     return inProgress && inProgress === "logout";
    // }

    return (
        <>
           
            {/* {inProgress === "none" && !isAuthenticated &&
                <div className={styles.loginContainer}>
                    <Card>
                        <Title3>EDOT Hub</Title3>
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
            } */}

            {/* {isAuthenticated && userData && !isLoggingIn() &&  */}
                <>
                    {/* <Navigation />
                   
                    {!userData.givenName &&
                     <div className={styles.contentContainer}>
                        <Spinner />
                    </div>
                    }
                    {userData.givenName &&
                        <>
                        <div className={styles.hero}>
                            <div className={styles.contentContainer}>
                                <Display>Welcome, {userData.givenName}</Display>
                                <Title2>Resources for you and your team.</Title2>
                                <p>An <a target="_blank" rel="noopener noreferrer" href="https://">inner-source project</a> by the Guild, 
                                based on the <Link target="_blank" to="https://">Engineering Hub</Link>.</p>
                            </div>
                        </div>
                        <div className={styles.contentContainer}>
                            <img alt="Multiple formats into markdown, markdown into Github" className={styles.normalizeImage} src={normalizeImage} />
                            <Title2>What is the Hub?</Title2>
                            <p>The Hub represents EDOT's initiative to normalize our engineering standards, guidance, and resources across teams. 
                            We are actively identifying and porting various artifacts into a common markdown format where they can be maintained in a collaborative, accessible platform (GitHub).</p>
                            <p>
                            The Hub allows teams and ICs to self-onboard, self-educate, and contribute to our best practices around designing, building, deploying, and scaling solutions.</p>
                        </div>
                        </>
                    } */}

                    {/* PI - Just testing */}
                    <Navigation />
                   
                   {name &&
                       <>
                       <div className={styles.hero}>
                           <div className={styles.contentContainer}>
                               <Display>Welcome, {name}</Display>
                               <Title2>Resources for you and your team.</Title2>
                               <p>I work for <Link target="_blank" to="https://www.microsoft.com/">Microsoft</Link>.</p>
                           </div>
                       </div>
                       <div className={styles.contentContainer}>
                           <img alt="Multiple formats into markdown, markdown into Github" className={styles.normalizeImage} src={normalizeImage} />
                           <Title2>Who is Paul?</Title2>
                           <p>Just some pleb who's trying to learn React and Fluent UI</p>
                       </div>
                       </>
                   }
             
                </>
            {/* } */}

        </>
    )
}
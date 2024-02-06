import styles from './styles.module.css'
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import Navigation from '../Navigation';

export default function OopsPage() {
  const error = useRouteError();
  let errorMessage = "Unknown Error";
  if (isRouteErrorResponse(error))
    errorMessage = error.status + " " + error.statusText;
  else if (error instanceof Error)
    errorMessage = error.message;

  return (
    <>
    <Navigation />
    <div className={styles.container}>
      <h1>Uh-oh!</h1>
      <p>You broke something didn't you? It's OK, you can tell me... 🧐</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
    </>
  );
}
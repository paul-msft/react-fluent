import styles from './styles.module.css'
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function OopsPage() {
  const error = useRouteError();
  let errorMessage = "Unknown Error";
  if (isRouteErrorResponse(error))
    errorMessage = error.status + " " + error.statusText;
  else if (error instanceof Error)
    errorMessage = error.message;

  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
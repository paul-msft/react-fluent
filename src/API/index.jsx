import styles from './styles.module.css'
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function API() {


  return (
    <div className={styles.container}>
      <h1>Placeholder API Header</h1>
      <p>This is where some content will be.</p>
    </div>
  );
}
import styles from "./styles.module.css";
import { Title1 } from "@fluentui/react-components";

export default function GuildGPT() {

  return (
    <>
      <div className={styles.contentContainer}>
        <Title1>Hello!</Title1>
        <p>No idea what's going on, to be honest!</p>

        <iframe 
          title="No idea!" 
          src=""
          frameBorder={0} 
          className={styles.iframe}
          allow="clipboard-write" />
      </div>
      </>
  );
}
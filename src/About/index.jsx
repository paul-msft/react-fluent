import styles from './styles.module.css'
import Navigation from '../Navigation';

export default function About() {

  return (
    <>
    <Navigation />
    <div className={styles.container}>
      <h1>Who is Paul?</h1>
      <p>Just some pleb trying to learn React and Fluent UI stuff.</p>
      <p>Formally known as the "<i>Resident Genius"</i> in BT... For some reason! 🤷‍♂️</p>
    </div>
    </>
  );
}
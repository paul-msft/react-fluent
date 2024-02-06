import styles from './styles.module.css'
import Navigation from '../Navigation';
import React from 'react';
import { Persona, Card } from "@fluentui/react-components";

export default function About() {

  return (
    <>
    <Navigation />
    <div className={styles.container}>
      <h1>Who is Paul?</h1>
      <p>Just some pleb trying to learn React and Fluent UI stuff.</p>
      <Card>
        <Persona
          name={"Paul Ivey"}
          secondaryText={"MICROSOFT TECHNICAL TRAINER"}
          tertiaryText={"Resident Genius"}
          avatar={{
            image: {
              src: "https://media.licdn.com/dms/image/D4E03AQEpuhuYeJ29Ow/profile-displayphoto-shrink_200_200/0/1676289501661?e=1712793600&v=beta&t=jPARjYKWMJ8pcqu-CdMwsTGgnFD4xzOcYBwaynauZxc" // I know, I know, it's hard-coded!
            },
          }}
        />
      </Card>
    </div>
    </>
  );
}
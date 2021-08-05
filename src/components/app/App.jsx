import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './styles.css';

export default function App() {
  return (
    <>
      <header styles={styles}>This is a headeR</header>
      <Switch>
        <h1>Hello World</h1>
      </Switch>
    </>
  );
}

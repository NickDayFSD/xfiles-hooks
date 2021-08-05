import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';
import styles from './styles.css';

export default function App() {
  return (
    <>
      <header className={styles.header}>This is a headeR</header>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/:id" component={CharacterDetails} />
        </Switch>
      </Router>
    </>
  );
}

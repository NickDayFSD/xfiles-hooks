import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetails';
import styles from './styles.css';

export default function App() {
  return (
    <>
      <header styles={styles}>This is a headeR</header>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/:id" component={CharacterDetails} />
      </Switch>
    </>
  );
}

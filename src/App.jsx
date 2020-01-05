import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import GameList from './components/GameList';
import ListScreenshots from "./components/ListScreenshots";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/" component = {GameList} />
        <Route path="/:id/screenshots" component={ListScreenshots} />

      </Switch>
    </div>
  );
}

export default App;

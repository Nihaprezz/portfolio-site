import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './containers/Navbar'
import HomePage from './Home/HomePage'
import About from './containers/About'
import ProjectsPage from './Projects/ProjectsPage'
import GameCouch from './Projects/GameCouch'
import MovieHangout from './Projects/MovieHangout'
import BrewQueue from './Projects/BrewQueue'
import BurgerDiner from './Projects/BurgerDiner'


function App() {
  return (
    <div className="App">
      < Navbar />

      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
        <Route exact path="/home" render={() => < HomePage />} />
        <Route exact path="/about" render={() => < About />} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/projects/gamecouch" component={GameCouch} />
        <Route exact path="/projects/moviehangout" component={MovieHangout} />
        <Route exact path="/projects/brewqueue" component={BrewQueue} />
        <Route exact path="/projects/burgerdiner" component={BurgerDiner} />

      </Switch>

      
    </div>
  );
}

export default App;

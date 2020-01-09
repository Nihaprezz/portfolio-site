import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './containers/Navbar'
import HomePage from './Home/HomePage'
import ProjectsPage from './Projects/ProjectsPage'


function App() {
  return (
    <div className="App">
      < Navbar />

      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
        <Route exact path="/home" render={() => < HomePage />} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>

      
    </div>
  );
}

export default App;

import React from 'react';

import {
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom'

//components 
import Home from './pages/home/base'
import Menu from './pages/menu'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/menu' component={Menu}/>
        </Switch>
    </Router>
  );
}

export default App;


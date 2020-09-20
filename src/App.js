import React from 'react';

import {
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom'

//components 
import Landing from './pages/landing'
import Menu from './pages/menu'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/menu' component={Menu}/>
        </Switch>
    </Router>
  );
}

export default App;


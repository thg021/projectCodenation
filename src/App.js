import React, { Component } from 'react'

import Main from './components/Main'
import User from './components/user/User'


import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  render() {
     return (
     
        <div > 
          <Router>
            <Route exact path='/' component={User} />
            <Route exact path='/user' component={Main} />
          </Router>
        </div>
     
    );
  }
}

export default App;

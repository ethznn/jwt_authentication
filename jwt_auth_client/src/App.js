import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom' ;
import Signin from './component/Signin'
import Welcome from './component/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Signin} />
            <Route exact path='/welcome' component={Welcome} />
          </div>
        </Router>
        
      </div>
    )
  }
}

export default App;

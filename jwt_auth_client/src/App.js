import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom' ;
import Signin from './component/Signin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Signin} />
        </Router>
        
      </div>
    );
  }
}

export default App;

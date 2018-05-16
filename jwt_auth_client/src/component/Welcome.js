import React, {Component} from 'react';
import jwtDecode from 'jwt-decode';

class Welcome extends Component {
  state = {useremail: undefined}
  componentDidMount(){
    let jwt = window.localStorage.getItem('jwt')
    let result = jwtDecode(jwt)
    this.setState(
      {useremail: result.useremail}
    )
    console.log(result)
  }
  render(){
    const { useremail } = this.state
    return (
      <div>
        <h1>{ useremail }</h1>
      </div>
    )
  }
}

export default Welcome;
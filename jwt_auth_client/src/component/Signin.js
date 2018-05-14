import React, {Component} from 'react';

class Signin extends Component {


  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.inputNode1.value);
    // console.log(this.inputNode2.value);

    var formData = new FormData();
    formData.append("useremail", this.inputNode1.value)
    formData.append("password", this.inputNode2.value)

    fetch("http://localhost:3001/tokens",
    {method: 'POST', body: formData})
    .then(res => res.json()).then(res => console.log(res.jwt))
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="useremail">user email</label> <br />
          <input type="useremail" id="useremail" name="useremail" ref={node => {this.inputNode1 = node}}/> <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" id="password" name="password" ref={node => {this.inputNode2 = node}} /> <br />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

export default Signin;
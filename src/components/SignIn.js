// import { connect } from "react-redux";
import React, { Component } from "react";
import "../assets/styles/auth.css";
import { Link } from "react-router-dom";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignIn = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const loginData = { email, password };

    /* 
    Access the login API route to send login request
    with loginData as the payload
    */
    console.log(loginData);
    /* 
    Set the authorization token to local storage 
    after succesful authentication using
    localStorage.setItem("token");
    */
  };

  render() {
    return (
      <React.Fragment>
        <form className='auth-form' onSubmit={this.handleSignIn}>
          <div className='heading'>
            <h4>
              Sign In
              <hr className='heading-line' />
            </h4>
          </div>
          <div className='form-ctrl'>
            <input
              placeholder='email'
              type='email'
              name='email'
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <div className='form-ctrl'>
            <input
              type='password'
              name='password'
              onChange={this.onChange}
              value={this.state.password}
              placeholder='password'
            />
          </div>
          <div className='form-axon'>
            <button type='submit'>Sign In</button>
            <Link to='/link-to-reset'>Forgot password?</Link>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default LoginPage;

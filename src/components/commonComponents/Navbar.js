import React, { Component } from "react";
import "../../assets/styles/navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    const tokn = localStorage.getItem("token");
    return (
      <div className='navigation-bar'>
        <div className='logo'>
          <Link className='logo' to='/'>
            Events Inc
          </Link>
        </div>
        <div className='routes'>
          <Link className='links' to='#'>
            Events
          </Link>
          <Link className='links' to='/create-event'>
            Create
          </Link>
          {!tokn && (
            <Link className='links' to='/login'>
              Login
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;

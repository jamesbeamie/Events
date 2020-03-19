import React, { Component } from "react";
import "../../assets/styles/navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className='navigation-bar'>
        <div className='logo'>
          <Link className='logo' to='/home'>
            Events Inc
          </Link>
        </div>
        <div className='routes'>
          <Link className='links' to='#'>
            Events
          </Link>
          <Link className='links' to='#'>
            Create
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;

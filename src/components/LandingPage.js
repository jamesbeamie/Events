import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../assets/styles/landingPage.css";

export class LandingPage extends Component {
  render() {
    return (
      <div className='page'>
        <div className='page-left'>
          <div className='page-content'>
            <div className='page-wording'>
              <h6>
                World Class Events <br />
                We got your back
              </h6>
            </div>
            <Link to='/events'>
              <button type='button' className='buttn'>
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

// import { connect } from "react-redux";
import React, { Component } from "react";
import "../assets/styles/createEvent.css";
import Navbar from "./commonComponents/Navbar";
class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      start: "",
      location: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlePost = event => {
    event.preventDefault();
    const { title, description, start, location } = this.state;
    const newEvent = { title, description, start, location };

    /* 
    Access the login Post route to create an event 
    passing the data from the state as the payload
    */
    console.log(newEvent);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <form className='event-form' onSubmit={this.handlePost}>
          <div className='img-input'>
            <img
              src='../../assets/images/reception.jpg'
              alt='img-placeholder'
            />
            <div className='battons'>
              <button>Select Image</button>
              <button>Upload</button>
            </div>
          </div>
          <div className='event-details'>
            <div className='form-ctrl'>
              <input
                placeholder='Event Title:'
                type='text'
                name='title'
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <div className='form-ctrl'>
              <textarea
                name='description'
                placeholder='Event Description:(Max 200 words)'
                type='text'
                onChange={this.onChange}
                value={this.state.email}
              ></textarea>
            </div>
            <div className='form-ctrl'>
              <input
                placeholder='00/00/0000'
                type='date'
                name='start'
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <div className='form-ctrl'>
              <input
                placeholder='Location:'
                type='text'
                name='location'
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
          </div>
          <div className='action-buttons'>
            <div className='battns'>
              <button className='cancel'>Cancel</button>
            </div>
            <div className='battns'>
              <button className='submit'>Submit</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default CreateEvent;

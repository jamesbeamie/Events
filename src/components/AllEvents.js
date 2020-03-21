import React, { Component } from "react";
import DelModal from "./commonComponents/DelModal";
import Backdrop from "./commonComponents/backdrop";
import events from "./commonComponents/dumyData";
import reception from "../assets/images/reception.jpg";

import "../assets/styles/eventList.css";

export class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specificEvent: null
    };
  }

  oneSpecificEvent = identifier => {
    console.log("gu_ID");
    const selectedEvent = events.find(
      event => event.unique_token === identifier
    );
    console.log("Specific-One", selectedEvent);
    this.setState({
      specificEvent: selectedEvent
    });
  };

  hangleShare = () => {
    console.log("share functionality");
  };

  hangleInvite = () => {
    console.log("Invite functionality");
  };

  render() {
    const { eventId, title, unique, date, attendants, comments } = this.props;

    const { specificEvent } = this.state;

    return (
      <React.Fragment>
        {specificEvent && <Backdrop />}
        {!specificEvent ? (
          <div className='event-list'>
            <ul>
              <li>
                <a href='#'>
                  <div className='items'>
                    <span onClick={this.oneSpecificEvent.bind(this, unique)}>
                      {title}
                    </span>
                    <span>{date}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <DelModal>
            <div className='main-div'>
              <div className='one'>
                <div className='oneA'>
                  <h3>{specificEvent.title}</h3>
                  <img className='main-image' src={reception} alt='blogImage' />
                </div>
                <div className='oneB'>
                  <div>
                    <p className='text-center'>
                      Description: {specificEvent.description}
                    </p>

                    <p className='deti'>
                      <b>Owner</b>: {specificEvent.owner}
                    </p>
                    <p className='deti'>
                      <b>Starts</b>: {specificEvent.start}
                    </p>
                    <p className='deti'>
                      <b>Ends</b>: {specificEvent.end}
                    </p>
                    <p className='deti'>
                      <b>Location</b>: {specificEvent.location}
                    </p>
                  </div>
                  <div className='battns'>
                    <button onClick={this.handleShare} className='share'>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className='two'>
                <img className='img-mini' src={reception} alt='blogImage' />
                <img className='img-mini' src={reception} alt='blogImage' />
                <img className='img-mini' src={reception} alt='blogImage' />
                <img className='img-mini' src={reception} alt='blogImage' />
              </div>
              <div className='three'>
                <div className='threeA'>
                  <h5>Attending</h5>
                  <ul>
                    <li>
                      {attendants.map(attendant => {
                        return attendant.name;
                      })}
                    </li>
                  </ul>
                </div>
                <div className='threeB'></div>
                <div className='threeC'>
                  <h5>Comments:</h5>
                  <ul>
                    <li>
                      <img
                        className='img-prof'
                        src={reception}
                        alt='blogImage'
                      />
                      {comments.map(coment => {
                        return (
                          (<span>{coment.user}</span>),
                          (<span>{coment.comment}</span>)
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='action-buttons'>
                <div className='battns'>
                  <button onClick={this.handleShare} className='share'>
                    Share
                  </button>
                </div>
                <div className='battns'>
                  <button onClick={this.handleInvite} className='invite'>
                    Invite
                  </button>
                </div>
              </div>
            </div>
          </DelModal>
        )}
      </React.Fragment>
    );
  }
}

export default AllEvents;

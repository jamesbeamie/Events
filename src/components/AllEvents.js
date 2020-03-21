/* eslint-disable react/prop-types */
import React from "react";
import "../assets/styles/eventList.css";
const AllEvents = props => (
  <div className='event-list'>
    <ul>
      <li>
        <a href='/'>
          <div className='items'>
            <span> {props.title}</span>
            <span>{props.date}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
);

export default AllEvents;

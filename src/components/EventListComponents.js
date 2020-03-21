/* eslint-disable react/prop-types */
import React from "react";
import events from "./commonComponents/dumyData";
import "../assets/styles/index.css";
import AllEvents from "./AllEvents";

const EventList = () => {
  console.log("events", events);
  const fetchedEvents = events.map(event => {
    return (
      <AllEvents
        title={event.name}
        eventId={event.id}
        owner={event.owner}
        date={event.date}
        location={event.location}
      />
    );
  });
  return (
    <div className='events-container'>
      <div className='form-ctrl'>
        <input placeholder='search' type='email' name='email' />
        Filter
      </div>
      {fetchedEvents}
    </div>
  );
};

export default EventList;

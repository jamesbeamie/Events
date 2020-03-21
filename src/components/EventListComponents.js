import React from "react";
import events from "./commonComponents/dumyData";
import "../assets/styles/index.css";
import AllEvents from "./AllEvents";

const EventList = () => {
  const fetchedEvents = events.map(event => {
    return (
      <AllEvents
        key={event.unique_token}
        title={event.title}
        eventId={event.id}
        owner={event.owner}
        date={event.start}
        location={event.location}
        unique={event.unique_token}
        attendants={event.attending}
        comments={event.comments}
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

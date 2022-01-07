import React from 'react';

function EventsBox(props) {
  return (
    <div className="event-container" id={props.id}>
      <img className="event-img" src={props.src} alt="" />
      <h3 className="event-title">{props.title}</h3>
      <h1 className="event-number">{props.number}</h1>
    </div>
  );
}

export default EventsBox;

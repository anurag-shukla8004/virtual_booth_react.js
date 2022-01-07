import React from 'react';
import EventsBox from './eventsBox';

function MenuBar() {
  return (
    <>
      <div className="main-container">
        <div className="menuBar-container">
          <EventsBox
            title={'EVENTS CREATED'}
            number={'20'}
            src={'https://www.w3schools.com/howto/img_avatar2.png'}
          />
          <EventsBox
            title={'EVENTS CREATED'}
            id={'event-container'}
            number={'20'}
            src={'https://www.w3schools.com/howto/img_avatar2.png'}
          />
          <EventsBox
            title={'EVENTS CREATED'}
            number={'20'}
            src={'https://www.w3schools.com/howto/img_avatar2.png'}
          />
        </div>
        <div className="searchBar-container">
          <input type="text" placeholder="Search..." />
          <div className="details-container">
            <div className="details-box">
              <h4>Name</h4>
              <h4>Slug</h4>
              <h4>Event Start Date</h4>
              <h4>Photos</h4>
            </div>
            <div className="details-details-box">
              <h4>Anurag</h4>
              <h4>Dash2022</h4>
              <h4>Event Start Date</h4>
              <h4>Photos</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;

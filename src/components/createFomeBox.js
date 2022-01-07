import React from 'react';

function CreateFomeBox() {
  return (
    <>
      <div className="createFomeBox-container">
        <div>
          <h2>General</h2>
        </div>
        <div className="eventName">
          <h4>Event Name</h4>
          <input type="text" placeholder="Choose Your Event Name" />
        </div>

        <div className="eventDates">
          <div className="eventdate-start">
            <div className="eventdate-start-date event">
              <h4>Start Date</h4>
              <input type="date" id="start-date" />
            </div>
            <div className="eventdate-start-time event">
              <h4>Start Time</h4>
              <input type="time" id="start-time"></input>
            </div>
          </div>
          <div className="eventdate-ends">
            <div className="eventdate-end-date event">
              <h4>End Date</h4>
              <input type="date" id="start-date" />
            </div>
            <div className="eventdate-end-time event">
              <h4>End Time</h4>
              <input type="time" id="start-time"></input>
            </div>
          </div>
        </div>

        <div className="customeDomain-slug">
          <div className="customeDomain">
            <h4>Custome Domain</h4>
            <input type="text" placeholder="Seleact..." />
          </div>
          <div className="slug">
            <h4>slug(www.anuragShukla8004)</h4>
            <input type="text" placeholder="Choose you event name as slug" />
          </div>
        </div>
        <div className="users">
          <h4>User With Access</h4>
          <input type="text" placeholder="Seleact..." />
        </div>
      </div>
    </>
  );
}

export default CreateFomeBox;

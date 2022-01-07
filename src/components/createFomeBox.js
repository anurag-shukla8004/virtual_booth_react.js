import React, { useState } from 'react';

function CreateFomeBox() {
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endDate, setEndDate] = useState();
  const [endTime, setEndTime] = useState();
  const [maxEndDate, setMaxDate] = useState();
  const [minEndDate, setMinDate] = useState();

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today, ' hekadjfakdj');

  Date.prototype.addDays = function (days, value) {
    const date = new Date(value);
    date.setDate(date.getDate() + days);
    return date;
  };

  function convert(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
  }

  const addDaysInStartDate = (value) => {
    let date = new Date();
    return date.addDays(7, value);
  };

  const dateConverter = (date) => {
    date = convert(date);
    return date;
  };

  const updateStartDate = (e) => {
    let date = addDaysInStartDate(e.target.value);
    console.log(date);
    date = dateConverter(date);
    setStartDate(e.target.value);
    console.log(date);
    setEndDate(date);
    setMaxDate(date);
    setMinDate(e.target.value);
  };
  const updateEndDate = (e) => {
    console.log(e.target.value);
    setEndDate(e.target.value);
  };
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
              <input
                type="date"
                id="start-date"
                onChange={updateStartDate}
                value={startDate}
                min={today}
              />
            </div>
            <div className="eventdate-start-time event">
              <h4>Start Time</h4>
              <input type="time" id="start-time" value={startTime}></input>
            </div>
          </div>
          <div className="eventdate-ends">
            <div className="eventdate-end-date event">
              <h4>End Date</h4>
              <input
                type="date"
                id="end-date"
                onChange={updateEndDate}
                max={maxEndDate}
                min={minEndDate}
                value={endDate}
              />
            </div>
            <div className="eventdate-end-time event">
              <h4>End Time</h4>
              <input type="time" id="end-time" value={endTime}></input>
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

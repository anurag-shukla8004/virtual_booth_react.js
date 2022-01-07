import React, { useState } from 'react';
import img from '../img/logo.png';
function Header() {
  const [flag, setflag] = useState(false);
  function myFunction() {
    if (flag === true) {
      setflag(false);
    }
    if (flag === false) {
      setflag(true);
    }
  }
  return (
    <>
      <div className="header-container">
        <div className="logo-img">
          <img src={img} alt="" />
        </div>
        <div className="profile-logout">
          <div className="profile">
            <i class="fa fa-user-circle-o"></i>
            <h3>Profile Name</h3>
          </div>
          <div className="divide-line"></div>
          <div className="logout">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
          </div>
          <a href="javascript:void(0);" class="icon" onClick={myFunction}>
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>

      <div
        id="myLinks"
        style={flag ? { display: 'block' } : { display: 'none' }}
      >
        <div className="searchBar-container" style={{ height: '0px' }}>
          <input type="text" placeholder="Search..." />
        </div>
        <div
          className="profile-logout"
          style={{ marginTop: '60px', marginLeft: '15px' }}
        >
          <div className="profile1">
            <i class="fa fa-user-circle-o"></i>
            <h3>Profile Name</h3>
          </div>
          <div className="divide-line1"></div>
          <div className="logout1">
            <i
              class="fa fa-sign-in"
              aria-hidden="true"
              style={{ display: 'block' }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

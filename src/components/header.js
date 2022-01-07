import React from 'react';
import img from '../img/logo.png';
function Header() {
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
        </div>
      </div>
    </>
  );
}

export default Header;

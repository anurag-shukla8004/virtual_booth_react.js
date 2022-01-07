import React from 'react';
import { useNavigate } from 'react-router';

function CreateNavBar() {
  const navigate = useNavigate();
  const switchRoute = (e) => {
    navigate('/');
  };
  return (
    <>
      <div className="createNavBar-container">
        <div className="virtual-booth">
          <h1>Virtual Booth</h1>
        </div>
        <div className="horizontal-step">
          <div class="stepper-wrapper">
            <div class="progress"></div>
            <div class="screen-indicator completed">1</div>
            <div class="screen-indicator">2</div>
            <div class="screen-indicator">3</div>
            <div class="screen-indicator">4</div>
          </div>
        </div>
        <div>
          <button onClick={switchRoute} className="createNavBar-btn">
            GO Back
          </button>
          <button className="createNavBar-btn-blue">Continue</button>
        </div>
      </div>
    </>
  );
}

export default CreateNavBar;

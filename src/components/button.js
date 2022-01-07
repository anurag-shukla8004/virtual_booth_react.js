import React from 'react';

function Button(props) {
  return (
    <>
      <div>
        <button className="sidebar-btn">{props.title}</button>
      </div>
    </>
  );
}

export default Button;

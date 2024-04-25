import React, { useState } from 'react';
import './Test.css'; // Import CSS file if using external stylesheet

const Test = () => {
  

  return (
    <div className="dropdown" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
      <span className="dropbtn">Todays Rate</span>
      <div className={`dropdown-content ${showMenu ? 'show' : ''}`}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

export default Test;

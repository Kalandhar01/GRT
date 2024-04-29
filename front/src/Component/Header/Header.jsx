import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="Header_main">
        <div className="header_left">
          <a href="https://www.grtjewels.com/auspicious/auspicious/index/">
            {' '}
            <img src="https://www.grtjewels.com/static/version1711469798/frontend/Custom/oriana/en_US/Custom_Auspicious/images/icons/icon-shasti.png" alt="" />
            <p className="Header_p">shasti</p>
          </a>


          <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className="dropbtn">
              Todays Rate : <span className="ttt">Gold 22k/1 g Rs6410</span>
            </span>
            <div className={`dropdown-content ${showMenu ? 'show' : ''}`}>
              <a href="#" className="dpt">
                GOLD - 24k - 1 g - Rs6998
              </a>
              <a href="#" className="dpt">
                GOLD - 22k - 1 g - Rs6410
              </a>
              <a href="#" className="dpt">
                GOLD - 18k - 1 g - Rs5248
              </a>
            </div>
          </div>
        </div>


<div className='Header_ryt'>
   
   <div className='wimg'>
    <a href="tel:18002031000">
        <img src="https://www.grtjewels.com/static/version1711469798/frontend/Custom/oriana/en_US/Oriana_Bannerslider/images/tollfree.png" alt="" />
        <p>18002031000</p>
        
    </a>
    </div>
    
</div>













      </div>
    </>
  );
};

export default Header;

    import React from 'react'
    import './Nav.scss'
    import { useState } from 'react';

    const Nav = () => {
        const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };
    return (
        <>  

        <div className='Container'>
            <div className='header'>
                
                <div className='con-left'>
                    <img src="https://www.grtjewels.com/static/version1711469798/frontend/Custom/oriana/en_US/images/icons/auscalendar.png" alt="" />
                    <a href="#" className='c-text'> Auspicious Day</a>



    <div className="dropdown" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
      <span className="dropbtn">Todays Rate : <span className="ttt">Gold 22k/1 g Rs6410</span></span>
      <div className={`dropdown-content ${showMenu ? 'show' : ''}`}>
        <a href="#" className='dpt'>GOLD - 24k - 1 g - Rs6998</a>
        <a href="#" className='dpt'>GOLD - 22k - 1 g - Rs6410</a>
        <a href="#" className='dpt'>GOLD - 18k - 1 g - Rs5248</a>
      </div>
    </div>
                    



                


                <div className='con-right'>

                </div>




            </div>






        </div>
        </div>
        
        
        
        
        </>
    )
    }

    export default Nav

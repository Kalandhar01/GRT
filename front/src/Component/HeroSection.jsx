import React from 'react';
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <div className='img'>
          <img src="https://media.grtjewels.com/cms_content_images/saving_scheme_landing.jpg" alt="" />
        </div>
      </div>

      <div className="grt_live_contentArea">
        <div className="promovideo-wrapper">

        <div className="promovideo_contentleft">
            <div data-content-type="html" 
            data-appearance="default" data-element="main" data-decoded="true">
              <h2 className='hed' style={{ fontSize: '24px', fontWeight: 'bold', }}>Jewellery Purchase Plan</h2>
              <p  className="mutedtxt">SHOP BY JEWELLERY TYPE</p>
              <p className="ptxt">GRT provides various Jewellery Purchase Plans that have been exclusively created to help you plan and buy the jewellery that you always wanted to buy. </p>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', paddingTop: '5%' }}>Download Brochure</h2>
              <h4  className="lin" style={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '1%' }}><a href="https://media.grtjewels.com/New-Golden-Eleven-Flexi.pdf" download="">New Golden Eleven Flexi</a></h4>
              <h4  className="lin"  style={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '1%' }}><a href="https://media.grtjewels.com/New_Golden_Eleven.pdf" download="">New Golden Eleven</a></h4>
              <h4 className="lin" style={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '1%' }}><a href="https://media.grtjewels.com/Golden_One.pdf" download="">Golden One</a></h4>
            </div>
          </div>


          <div className="promovideo_contentright">
            <div className="book_appoinment_div">
              <h2>OWNING YOUR DREAM JEWELLERY NOW MADE SIMPLE AND EASY</h2>
              <button className='bt1'>JOIN NEW JEWELLERY PURCHASE PLAN</button>
              <button className='bt1 def'>JOIN NEW JEWELLERY PURCHASE PLAN</button>
              <button className='bt1 def'>JOIN NEW JEWELLERY PURCHASE PLAN</button>



              <div className="pay">
                <p className='pay-p'>INSTANT PAY</p>
                <h4 className='pay-h4'>PAY YOUR MONTHLY ADVANCE INSTANTLY</h4>

                <div className="pay">

                  <p className='py-p'>  Scheme Name*
         </p>

<div className="sel">
      <select className="py-s" >
    <option value="">Please select</option>
    <option value="AH" label="Golden Eleven Flexi Plan-2021"></option>
    <option value="NG" label="New Golden Eleven"></option>
    <option value="NF" label="New Golden Eleven Flexi"></option>
</select>
</div>


<p className='py-p'> Scheme Registered Mobile No*
         </p>
<div className="sel">
      <select className="py-s" >
    <option value="">Please select</option>
    <option value="AH" label="Golden Eleven Flexi Plan-2021"></option>
    <option value="NG" label="New Golden Eleven"></option>
    <option value="NF" label="New Golden Eleven Flexi"></option>
</select>
</div>

<input type="submit" class="instant-pay-button" value="Submit" fdprocessedid="mgki1"></input>

         



                </div>





              </div>
             
            </div>
          </div>


         



          
        </div>
      </div>






 <div className="footer">

<h1 className='ftxt'>
Benefits of New Golden Eleven Plan
</h1>

<div class="bp_main">
    <div class="bp_container-1">
        <img className='fimg' src="https://www.grtjewels.com/static/version1711469798/frontend/Custom/oriana/en_US/Custom_Jss/images/more_benifits.png" alt="" />
        <h3 className='bptext'>Get More Benefits</h3>
    </div>
    <div class="bp_container-2">
        <img className='fimg' src="https://www.grtjewels.com/static/version1711469798/frontend/Custom/oriana/en_US/Custom_Jss/images/more_benifits.png" alt="" />
        <h3 className='bptext' >No Making Charges *</h3>
    </div>
    <div class="bp_container-3">
        <img className='fimg' src="https://www.grtjewels.com/static/version1711469798/frontend/Custom/oriana/en_US/Custom_Jss/images/more_benifits.png" alt="" />
        <h3 className='bptext' >No Wastage(VA) *</h3>
    </div>
</div>



</div>










    





    </div>
  );
}

export default HeroSection;

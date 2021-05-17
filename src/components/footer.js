
import '../screens/home.css'

import phoneapp from '../assats/images/phone-app.png'
import appstore from '../assats/images/appstore.png'
import playstore from '../assats/images/playstore.png'
import { FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram, } from "react-icons/fa";





import React from 'react'

export default function Footer() {
    return (
        <div>
            

    <footer>
       
       <div className="olxapp ali-c  ">
   
         <div className="iner-olx-divs js-c  ">
              <img src={phoneapp} alt="" srcset="" />
         </div>
         <div className="iner-olx-divs js-c mr  f-wrep">
             <h2 className="h2-olxapp">TRY THE OLX APP</h2>
             <p className="pt-olxapp" > Buy, sell and find just about anything using the app on your mobile.</p>
         </div>
   
         <div className="iner-olx-divs js-c mr "> 
   
            <div className="link-img-div-app mr ">
                <h6 className="h3-olxapp " style={{ fontWeight: "500", color:'black'}}>GET YOUR APP TODAY</h6>
                <div className="dis-f f-wrep">
                  <div className="link-img">  <img src={appstore} alt="" srcset="" /> </div>
                  <div className="link-img">  <img src={playstore} alt="" srcset="" /> </div>
                </div>
            </div>
   
         </div>
       </div>
    
   
   <div className="foot-sec-2 dis-f js-c">
   
      <div class="col-6 col-lg-1 offset-lg-1  mar-bt-ft-link">
        <h5>Popular CATAGORIES</h5>
        
          <li class="li-foot-link"><a href="#">Home</a></li>
          <li class="li-foot-link"><a href="#">Docs</a></li>
          <li class="li-foot-link"><a href="#">Examples</a></li>
          <li class="li-foot-link"><a href="#">Themes</a></li>
          <li class="li-foot-link"><a href="#">Blog</a></li>
        
      </div>
   
      <div class="col-6 col-lg-1 offset-lg-1 mb-3 mar-bt-ft-link">
        <h5>TEENDING SEARCHES</h5>
        
          <li class="li-foot-link"><a href="#">Home</a></li>
          <li class="li-foot-link"><a href="#">Docs</a></li>
          <li class="li-foot-link"><a href="#">Examples</a></li>
          <li class="li-foot-link"><a href="#">Themes</a></li>
          <li class="li-foot-link"><a href="#">Blog</a></li>
        
      </div>
   
      <div class="col-6 col-lg-1 offset-lg-1 mb-3 mar-bt-ft-link">
        <h5>ABOUT US</h5>
        
          <li class="li-foot-link "><a href="#">Home</a></li>
          <li class="li-foot-link"><a href="#">Docs</a></li>
          <li class="li-foot-link"><a href="#">Examples</a></li>
          <li class="li-foot-link"><a href="#">Themes</a></li>
          <li class="li-foot-link"><a href="#">Blog</a></li>
       
      </div>
   
      <div class="col-6 col-lg-1 offset-lg-1 mb-3 mar-bt-ft-link">
        <h5>OLX</h5>
       
          <li class="li-foot-link"><a href="#">Home</a></li>
          <li class="li-foot-link"><a href="#">Docs</a></li>
          <li class="li-foot-link"><a href="#">Examples</a></li>
          <li class="li-foot-link"><a href="#">Themes</a></li>
          <li class="li-foot-link"><a href="#">Blog</a></li>
        
      </div> 
   
      <div className="social-div ">
         <span style={{fontSize:"22px",}} >FOLLOW US</span>
        <div className="social-icons ">
              <div className="s-i-f   ">
                  <a href="" className="iconCircle"> <FaFacebookF /> </a>
                  <a href="" className="iconCircle"> <FaTwitter />  </a>
                  <a href="" className="iconCircle"> <FaYoutube />  </a>
                  <a href="" className="iconCircle"> <FaInstagram /> </a>        
              </div>
        </div>
        <div className="dis-f ">
                  <div className="link-img " style={{marginRight:"10px",}}>  <img src={appstore} alt="" srcset=""  style={{width:100,}}/> </div>
                  <div className="link-img">  <img src={playstore} alt="" srcset="" style={{width:100,}} /> </div>
        </div>
      </div>

   </div>

   <div className="footbar dis-f f-wrep">
          <div className="bar-p ">Other Countries india-South Africa-Indonesia</div>
          <div className="bar-p"> Free Classifieds in Pakistan .@ 2006-2021 OLX </div>
      </div> 
   
   
   
   
    </footer>
            
        </div>
    )
}






















import React from "react";
import { Link } from "react-router-dom";
import './styles.scss'

const FooterBanner = () => {
   return (
      <div className="footer-banner-container">
         <div className="banner-desc">
            <div className="left">
               <p>29% OFF</p>
               <h3>FineSmile</h3>
               {/* <h3>{largeText2}</h3>
               <p>{saleTime}</p> */}
            </div>
            <div className="right">
               <p>beast solo air</p>
               <h3>29 Apr to 29 may</h3>
               <p>grown from 270 to 480 employees in the last 12 months.</p>
               <Link to={`/`}>
                  <button type="button">mua ngay</button>
               </Link>
            </div>

            <img src={'https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp'} className="footer-banner-image" />
         </div>
      </div>
   );
};

export default FooterBanner;

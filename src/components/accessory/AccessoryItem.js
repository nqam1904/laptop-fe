import { images } from "assets";
import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from 'utils/constant';
import { formatNumber } from "utils/function";
import './index.scss';

const AccessoryItem = (props) => {
   return (
      <div>
         <Link to={`/accessory/${props?.accessory?.slug}`}>
            <div className="accessory-card">
               <img src={`${API_URL}` + props?.accessory?.images?.[0]?.url}
                  onError={({ currentTarget }) => {
                     currentTarget.onerror = null; // prevents looping
                     currentTarget.src = images.no_image;
                  }}
                  width={250} height={250} className="accessory-image" alt={props?.name} />
               <p className="accessory-name">{props?.accessory?.name}</p>
               <p className="accessory-price">Giá: {formatNumber(props?.accessory?.price)}₫</p>
            </div>
         </Link>
      </div>
   );
};

export default React.memo(AccessoryItem);

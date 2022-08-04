import { images } from "assets";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAccessoryDetailAction } from "redux/actions/accessoryAction";
import { API_URL } from 'utils/constant';
import { formatNumber } from "utils/function";
import './index.scss';
import slugify from 'react-slugify';

const AccessoryItem = (props) => {
   const dispatch = useDispatch()
   // const getProductStore = () => {
   //    dispatch(getDetailLaptopAction(props?.product?.id))
   // }
   // const price = props?.product?.price_promotion > 0 ? props?.product?.price_promotion : props?.product?.price
   const slug = slugify(props?.accessory?.slug);
   return (
      <div>
         <Link to={`/accessory/${slug}`} onClick={() => dispatch(getAccessoryDetailAction(props?.accessory?.id))}>
            <div className="accessory-card">
               <img src={`${API_URL}` + props?.accessory?.images?.[0]?.url}
                  onError={({ currentTarget }) => {
                     currentTarget.onerror = null; // prevents looping
                     currentTarget.src = images.no_image;
                  }}
                  width={'100%'} height={250} className="accessory-image" alt={props?.name} />
               <p className="accessory-name">{props?.accessory?.name}</p>
               <p className="accessory-price">Giá: {formatNumber(props?.accessory?.price)}₫</p>
            </div>
         </Link>
      </div>
   );
};

export default React.memo(AccessoryItem);

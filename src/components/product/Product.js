import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "utils/function";
import './styles.scss'
import { useDispatch } from 'react-redux';
import { getDetailLaptopAction } from "redux/actions/laptopAction";

const Product = (props) => {
   const dispatch = useDispatch()
   const BASE_URL = "http://localhost:1337"
   return (
      <div>
         <Link to={`/product/${props?.product?.slug}`} onClick={() => dispatch(getDetailLaptopAction(props?.product?.slug))}>
            <div className="product-card">
               <img src={`${BASE_URL}` + props?.product?.images?.[0]?.url} width={250} height={250} className="product-image" alt={props?.name} />
               <p className="product-name">{props?.product?.name}</p>
               <p className="product-price">Giá: {formatNumber(props?.product?.price)}₫</p>
            </div>
         </Link>
      </div>
   );
};

export default Product;

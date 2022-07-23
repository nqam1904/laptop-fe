import { API_URL } from 'utils/constant';
import { formatNumber } from "utils/function";
import { Link } from "react-router-dom";
import './styles.scss';
import { useDispatch } from 'react-redux';
import { getDetailLaptopAction } from "redux/actions/laptopAction";
import { useEffect } from 'react';
const Product = (props) => {
   const dispatch = useDispatch()
   // const getProductStore = () => {
   //    if (props.storage === true) {
   //       dispatch(getDetailLaptopAction(props?.product?.slug))
   //    } else {
   //       return
   //    }
   // }
   // useEffect(() => { getProductStore() }, [])
   return (
      <div>
         <Link to={`/product/${props?.product?.slug}`}>
            <div className="product-card">
               <img src={`${API_URL}` + props?.product?.images?.[0]?.url} width={250} height={250} className="product-image" alt={props?.name} />
               <p className="product-name">{props?.product?.name}</p>
               <p className="product-price">Giá: {formatNumber(props?.product?.price)}₫</p>
            </div>
         </Link>
      </div>
   );
};

export default Product;

import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getDetailLaptopAction } from "redux/actions/laptopAction";
import { API_URL } from 'utils/constant';
import { formatNumber } from "utils/function";
import './styles.scss';

const Product = (props) => {
   const dispatch = useDispatch()
   const getProductStore = () => {
      if (props.storage === true) {
         window.scrollTo({ top: 0, behavior: 'smooth' });
         dispatch(getDetailLaptopAction(props?.product?.slug))
      } else {
         return
      }
   }
   return (
      <div>
         <Link to={`/product/${props?.product?.slug}`} onClick={getProductStore}>
            <div className="product-card">
               <img src={`${API_URL}` + props?.product?.images?.[0]?.url} width={240} height={240} className="product-image" alt={props?.name} />
               <p className="product-name">{props?.product?.name}</p>
               <p className="product-card_price">{formatNumber(props?.product?.price)}₫</p>
            </div>
         </Link>
      </div>
   );
};

export default Product;

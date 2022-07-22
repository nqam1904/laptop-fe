import { Link } from "react-router-dom";
import { API_URL } from 'utils/constant';
import { formatNumber } from "utils/function";
import './styles.scss';

const Product = (props) => {
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

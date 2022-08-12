import { images } from 'assets';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getDetailLaptopAction } from "redux/actions/laptopAction";
import { API_URL } from 'utils/constant';
import { formatNumber } from "utils/function";
import './styles.scss';
import slugify from 'react-slugify';
import _ from 'lodash'
const Product = (props) => {
   const dispatch = useDispatch()
   const getProductStore = () => {
      dispatch(getDetailLaptopAction(props?.product?.id))
   }
   const price = props?.product?.price_promotion || 0
   const slug = slugify(props?.product?.slug, {
      delimiter: '_',
      prefix: 'laptop',
   });
   return (
      <div>
         <Link to={`/product/${slug}`} onClick={getProductStore}>
            <div className="product-card">
               <img src={`${API_URL}` + props?.product?.images?.[0]?.url} width={"100%"} height={240}
                  onError={({ currentTarget }) => {
                     currentTarget.onerror = null; // prevents looping
                     currentTarget.src = images.no_image;
                  }}
                  className="product-image" alt={props?.name} />
               <p className="product-name">{props?.product?.name}</p>
               {!_.isNil(props?.product?.short_config) && <p className='product-short_config'>{props?.product?.short_config || ''}</p>}
               <p className="product-card_price">{formatNumber(price)}₫</p>
            </div>
         </Link>
      </div>
   );
};

export default Product;

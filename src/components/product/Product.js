import React from "react";
import { Link } from "react-router-dom";
import './styles.scss'

const Product = ({ product: { id, image, name, price, slug } }) => {
   return (
      <div>
         <Link to={`/product/${slug}`}>
            <div className="product-card">
               <img src={`${image}`} width={250} height={250} className="product-image" alt={name} />
               <p className="product-name">{name}</p>
               <p className="product-price">{price}</p>
            </div>
         </Link>
      </div>
   );
};

export default Product;

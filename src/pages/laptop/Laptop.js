import { Product } from 'components';
import { useSelector } from 'react-redux';
import { laptopSelector } from 'redux/selector/laptopSelector';
import "./Laptop.scss";

const Laptop = () => {
   const listLaptop = useSelector(laptopSelector)
   const data = () => {
      const isShowLaptopBest = listLaptop.filter((is) => is.show === true)
      const showLaptop = isShowLaptopBest.map((item, index) => (
         <Product key={item.id} product={item} />
      ))
      return showLaptop
   }
   return (
      <div className='laptop'>
         <h2 className='title'>Laptop bán chạy nhất</h2>
         <div className="products-container">
            {data()}
         </div>
      </div>
   )
}
export default Laptop
import { images } from 'assets'
import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { getLaptopByCateAction } from 'redux/actions/laptopAction'
import { headerSelector } from 'redux/selector/headerSeletor'
import classes from "./Header.module.scss";
import _ from 'lodash'
import { getAccessoryByPriceAction } from 'redux/actions/accessoryAction'
import { categorySelector } from 'redux/selector/laptopSelector'
import { title_website } from 'constants/common'
import { screenHeight, screenWidth } from 'utils/constant'
import SliderHeader from './SliderHeader'
const Header = () => {
   const dispatch = useDispatch()
   const header = useSelector(headerSelector)
   const accesory = useSelector(categorySelector)
   const [menuOpen, setMenuOpen] = useState(false);
   const [size, setSize] = useState({
      width: screenWidth,
      height: screenHeight,
   });

   let activeStyle = {
      background: "rgba(255, 255, 255, 0.1)"
   };

   const dataHeader = () => {
      const isShow = header?.filter((is) => is.show === true)
      const showHeader = isShow?.map((header, item) => (
         <li key={item}>
            <NavLink
               style={({ isActive }) =>
                  isActive ? activeStyle : undefined
               }
               onClick={() => {
                  setTimeout(() => {
                     setMenuOpen(false);
                  }, 500)
                  dispatch(getLaptopByCateAction(header?.categories?.[0]?.name))
               }}
               to={`${header.url}`}>{header?.categories?.[0]?.name}</NavLink>
         </li>
      ))
      return showHeader
   }

   useEffect(() => {
      const handleResize = () => {
         setSize({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
   }, []);
   useEffect(() => {
      if (size.width > 1024 && menuOpen) {
         setMenuOpen(false);
      }
   }, [size.width, menuOpen]);
   const menuToggleHandler = () => {
      setMenuOpen(true);
   };
   return (
      <div>
         <header className={classes.header} >
            <div className={classes.header__content}>
               <div className={classes.header__content__toggle}>
                  {!menuOpen ? (
                     <img src={images.ic_menu} alt="ic_menu" width={25} height={25} onClick={menuToggleHandler} />
                  ) : (
                     <img src={images.ic_menu_x} alt="ic_menu" width={25} height={25} onClick={menuToggleHandler} />
                  )}
               </div>
               <Link to="/" className={classes.header__content__logo} onClick={() => window.reload()}>
                  {title_website || 'Lap4all'}
               </Link>
               <nav
                  onClick={() => setMenuOpen((p) => !p)}
                  className={`${classes.header__content__nav} ${menuOpen && size.width < 1024 ? classes.isMenu : ""
                     }`}>
                  <ul>
                     {!_.isEmpty(header) && dataHeader()}
                     <li>
                        <NavLink
                           to='/accessory'
                           style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                           }
                           onClick={() => {
                              setTimeout(() => {
                                 setMenuOpen(false);
                              }, 500)
                              dispatch(getAccessoryByPriceAction(accesory?.find(x => x.name === 'Accessory')))
                           }}>Phụ kiện</NavLink>
                     </li>
                  </ul>
               </nav>
               <div className={classes.header__search}>
                  <Link
                     to='/search'><FaSearch color='white' /></Link>
               </div>
            </div>
         </header>
         <SliderHeader />
      </div>


   );
};


export default React.memo(Header)

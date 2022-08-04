import { images } from 'assets'
import React, { useState, useEffect } from 'react'
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
const Header = () => {
   const dispatch = useDispatch()
   const header = useSelector(headerSelector)
   const accesory = useSelector(categorySelector)
   const [menuOpen, setMenuOpen] = useState(false);
   const [size, setSize] = useState({
      width: window.screen.width,
      height: window.screen.height,
   });
   const turnOffMenu = () => {
      if (menuOpen) {
         setMenuOpen((p) => !p);
      }
   }
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
                  turnOffMenu()
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
      if (size.width > 768 && menuOpen) {
         setMenuOpen(false);
      }
   }, [size.width, menuOpen]);

   const menuToggleHandler = () => {
      setMenuOpen((p) => !p);
   };
   return (
      <header className={classes.header}>
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
               className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""
                  }`}>
               <ul>
                  {!_.isEmpty(header) && dataHeader()}
                  <li>
                     <Link
                        to='/accessory'
                        onClick={() => {
                           turnOffMenu()
                           dispatch(getAccessoryByPriceAction(accesory?.find(x => x.name === 'Accessory')))
                        }}>Phụ kiện</Link>
                  </li>
                  <li className={classes.header__search}>
                     <Link
                        to='/search'><FaSearch /></Link>
                  </li>
               </ul>
            </nav>

         </div>
      </header>
   );
};


export default React.memo(Header)

import { images } from 'assets'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLaptopByCateAction } from 'redux/actions/laptopAction'
import { headerSelector } from 'redux/selector/headerSeletor'
import classes from "./Header.module.scss";
const Header = () => {
   const dispatch = useDispatch()
   const header = useSelector(headerSelector)
   const [menuOpen, setMenuOpen] = useState(false);
   const [size, setSize] = useState({
      width: undefined,
      height: undefined,
   });
   const dataHeader = () => {
      const isShow = header.filter((is) => is.show === true)
      const showHeader = isShow.map((header, item) => (
         <li key={item}>
            <Link
               onClick={() => dispatch(getLaptopByCateAction(header?.categories?.[0]?.name))}
               to={`${header.url}`}>{header?.categories?.[0]?.name}</Link>
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
            <Link to="/" className={classes.header__content__logo}>
               navbar
            </Link>
            <nav
               className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""
                  }`}
            >
               <ul>
                  {dataHeader()}
               </ul>
            </nav>
            <div className={classes.header__content__toggle}>
               {!menuOpen ? (
                  <img src={images.ic_menu} alt="ic_menu" width={25} height={25} onClick={menuToggleHandler} />
               ) : (
                  <img src={images.ic_menu_x} alt="ic_menu" width={25} height={25} onClick={menuToggleHandler} />
               )}
            </div>
         </div>
      </header>
   );
};


export default React.memo(Header)

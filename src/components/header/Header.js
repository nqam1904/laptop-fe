import { BottomSheet } from 'react-spring-bottom-sheet'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLaptopByCateAction } from 'redux/actions/laptopAction'
import { headerSelector } from 'redux/selector/headerSeletor'
import './styles.scss'
import { Sling as Hamburger } from 'hamburger-react'
const Header = () => {
   const dispatch = useDispatch()
   const [isActive, setIsActive] = useState(false)
   const header = useSelector(headerSelector)
   const dataHeader = () => {
      const isShow = header.filter((is) => is.show === true)
      const showHeader = isShow.map((header, item) => (
         <span className="item-menu" key={item}>
            <Link
               key={item}
               onClick={() => dispatch(getLaptopByCateAction(header?.categories?.[0]?.name))}
               to={`${header.url}`}>{header?.categories?.[0]?.name}</Link>
         </span>
      ))
      return showHeader
   }
   return (
      <div className="header-container">
         <p className="logo">
            <Link to="/">THINH LAPTOP</Link>
         </p>
         <div className="list-link_menu">
            {dataHeader()}
         </div>
         <div className='buger'>
            <Hamburger toggled={isActive} color={'#FFFFFF'} toggle={setIsActive} />
         </div>
         <BottomSheet open={isActive}>{dataHeader()}</BottomSheet>
      </div>
   )
}

export default Header

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { headerSelector } from 'redux/selector/headerSeletor'
import './styles.scss'

const Header = () => {
   const header = useSelector(headerSelector)
   const dataHeader = () => {
      const isShow = header.filter((is) => is.show === true)
      const showHeader = isShow.map((header, item) => (
         <p className="item-menu" key={item}>
            <Link to={`${header.url}`}>{header?.categories?.[0]?.name}</Link>
         </p>
      ))
      return showHeader
   }
   return (
      <div className="header-container">
         <p className="logo">
            <Link to="/">THINH STORE</Link>
         </p>
         <div className="list-link_menu">
            {dataHeader()}
         </div>
      </div>
   )
}

export default Header

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLaptopByCateAction } from 'redux/actions/laptopAction'
import { headerSelector } from 'redux/selector/headerSeletor'
import { routes } from './routes'
import './styles.scss'

const Header = () => {
   const dispatch = useDispatch()
   const header = useSelector(headerSelector)
   const dataHeader = () => {
      const isShow = header.filter((is) => is.show === true)
      const showHeader = isShow.map((header, item) => (
         <p className="item-menu" key={item}>
            <Link
               key={item}
               onClick={() => dispatch(getLaptopByCateAction(header?.categories?.[0]?.name))}
               to={`${header.url}`}>{header?.categories?.[0]?.name}</Link>
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

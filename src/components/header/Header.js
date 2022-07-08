import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './routes'
import './styles.scss'

const Header = () => {
   return (
      <div className="header-container">
         <p className="logo">
            <Link to="/">THINH STORE</Link>
         </p>
         <div className="list-link_menu">
            {routes.map((x) => (
               <p className="item-menu" key={x.id}>
                  <Link to={`/${x.name}`}>{x.name}</Link>
               </p>
            ))}
         </div>
      </div>
   )
}

export default Header

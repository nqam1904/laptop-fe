import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getLaptopByCateAction } from 'redux/actions/laptopAction'
import { headerSelector } from 'redux/selector/headerSeletor'
import classes from "./HeaderMini.module.scss";
import { getAccessoryByPriceAction } from 'redux/actions/accessoryAction'
import { categorySelector } from 'redux/selector/laptopSelector'

const SliderHeader = () => {
   const header = useSelector(headerSelector)
   const dispatch = useDispatch()
   const accesory = useSelector(categorySelector)

   let activeStyle = {
      color: 'blue'
   };
   const dataHeader = () => {
      const isShow = header?.filter((is) => is.show === true)
      const showHeader = isShow?.map((header, item) => (
         <NavLink className={classes.wapper_header__item}
            style={({ isActive }) =>
               isActive ? activeStyle : undefined
            }
            onClick={() => {
               dispatch(getLaptopByCateAction(header?.categories?.[0]?.name))
            }}
            to={`${header.url}`}>{header?.categories?.[0]?.name}</NavLink>
      ))
      return showHeader
   }

   return (
      <div className={classes.wapper_header}>
         {dataHeader()}
         <NavLink
            className={classes.wapper_header__item}
            to='/accessory'
            style={({ isActive }) =>
               isActive ? activeStyle : undefined
            }
            onClick={() => {
               dispatch(getAccessoryByPriceAction(accesory?.find(x => x.name === 'Accessory')))
            }}>Phụ kiện</NavLink>
      </div>
   )
}
export default SliderHeader
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLaptopByCateAction } from 'redux/actions/laptopAction'
import './index.scss'
const Breadcrumb = (props) => {
   const dispatch = useDispatch()
   return (
      <ul class="breadcrumb" style={props.style}>
         <li><Link to="/">Trang chủ</Link></li>
         <li><Link to={`/${props.category}`} onClick={() => dispatch(getLaptopByCateAction(props?.category))}>{props?.category}</Link></li>
         <li>{props.product}</li>
      </ul>
   )
}

export default React.memo(Breadcrumb)

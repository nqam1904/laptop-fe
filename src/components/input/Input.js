import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchProductAction } from 'redux/actions/laptopAction'
import './index.scss'
const Input = () => {
   const dispatch = useDispatch()
   const [text, setText] = useState('')
   const onClick = () => {
      dispatch(searchProductAction(text))
   }
   const onchange = (text) => {
      text.preventDefault()
      setText(text.target.value)
   }
   const _handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         dispatch(searchProductAction(text))
      }
   }
   return (
      <div className='search'>
         <input type="text" value={text} onChange={onchange} onKeyDown={_handleKeyDown}
            className='search-input' placeholder='Tìm kiếm...' />
         <button className='search-btn' onClick={onClick}>Tìm kiếm</button>
      </div>
   )
}

export default React.memo(Input)
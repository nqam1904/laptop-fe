import { createAction } from "@reduxjs/toolkit"

export const GET_ACCESSORY = 'GET_ACCESSORY'
export const GET_ACCESSORY_SUCCESS = 'GET_ACCESSORY_SUCCESS'
export const getAccessoryAction = createAction(GET_ACCESSORY)
export const getAccessorySuccess = createAction(GET_ACCESSORY_SUCCESS)

export const GET_ACCESSORY_DETAIL = 'GET_ACCESSORY_DETAIL'
export const GET_ACCESSORY_DETAIL_SUCCESS = 'GET_ACCESSORY_DETAIL_SUCCESS'
export const getAccessoryDetailAction = createAction(GET_ACCESSORY_DETAIL)
export const getAccessoryDetailSuccess = createAction(GET_ACCESSORY_DETAIL_SUCCESS)

//

// GET LAPTOP BY PRICE 
export const GET_ACCESSORY_BY_PRICE = 'GET_ACCESSORY_BY_PRICE'
export const GET_ACCESSORY_BY_PRICE_SUCCESS = 'GET_LAPTOP_BY_PRICE_SUCCESS'
export const getAccessoryByPriceAction = createAction(GET_ACCESSORY_BY_PRICE)
export const getAccessoryByPriceSuccess = createAction(GET_ACCESSORY_BY_PRICE_SUCCESS)
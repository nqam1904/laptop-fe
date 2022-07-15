import { createAction } from '@reduxjs/toolkit'

export const GET_LIST_LAPTOP = 'GET_LIST_LAPTOP'
export const GET_LIST_LAPTOP_SUCCESS = 'GET_LIST_LAPTOP_SUCCESS'
export const getListLaptopAction = createAction(GET_LIST_LAPTOP)
export const getListLaptopSuccess = createAction(GET_LIST_LAPTOP_SUCCESS)

// GET LAPTOP BY CATEGORY 
export const GET_LAPTOP_BY_CATE = 'GET_LAPTOP_BY_CATE'
export const GET_LAPTOP_BY_CATE_SUCCESS = 'GET_LAPTOP_BY_CATE_SUCCESS'
export const getLaptopByCateAction = createAction(GET_LAPTOP_BY_CATE)
export const getLaptopByCateSuccess = createAction(GET_LAPTOP_BY_CATE_SUCCESS)

// GET LAPTOP BY PRICE 
export const GET_LAPTOP_BY_PRICE = 'GET_LAPTOP_BY_PRICE'
export const GET_LAPTOP_BY_PRICE_SUCCESS = 'GET_LAPTOP_BY_PRICE_SUCCESS'
export const getLaptopByPriceAction = createAction(GET_LAPTOP_BY_PRICE)
export const getLaptopByPriceSuccess = createAction(GET_LAPTOP_BY_PRICE_SUCCESS)

// GET DETAIL LAPTOP

export const GET_DETAIL_LAPTOP = 'GET_DETAIL_LAPTOP'
export const GET_DETAIL_LAPTOP_SUCCESS = 'GET_DETAIL_LAPTOP_SUCCESS'
export const getDetailLaptopAction = createAction(GET_DETAIL_LAPTOP)
export const getDetailLaptopSuccess = createAction(GET_DETAIL_LAPTOP_SUCCESS)
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

export const GET_PRODUCT_VIEW = 'GET_PRODUCT_VIEW'
export const GET_PRODUCT_VIEW_SUCCESS = 'GET_PRODUCT_VIEW_SUCCESS'
export const getProdcutViewAction = createAction(GET_PRODUCT_VIEW)
export const getProdcutViewSuccess = createAction(GET_PRODUCT_VIEW_SUCCESS)

// SEARCH PRODUCT
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
export const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS'
export const searchProductAction = createAction(SEARCH_PRODUCT)
export const searchProductSuccess = createAction(SEARCH_PRODUCT_SUCCESS)

// GET CATEGORY
export const GET_CATEGORY = 'GET_CATEGORY'
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'
export const getCategoryAction = createAction(GET_CATEGORY)
export const getCategorySuccess = createAction(GET_CATEGORY_SUCCESS)
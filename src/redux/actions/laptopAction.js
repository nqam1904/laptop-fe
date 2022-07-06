import { createAction } from '@reduxjs/toolkit'

export const GET_LIST_LAPTOP = 'GET_LIST_LAPTOP'
export const getListLaptopAction = createAction(GET_LIST_LAPTOP)
export const GET_LIST_LAPTOP_SUCCESS = 'GET_LIST_LAPTOP_SUCCESS'
export const getListLaptopSuccess = createAction(GET_LIST_LAPTOP_SUCCESS)


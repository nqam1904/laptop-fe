import { createAction } from '@reduxjs/toolkit'

export const GET_LIST_LAPTOP_HOME = 'GET_LIST_LAPTOP_HOME'
export const GET_LIST_LAPTOP_HOME_SUCCESS = 'GET_LIST_LAPTOP_HOME_SUCCESS'
export const getListLaptopHome = createAction(GET_LIST_LAPTOP_HOME)
export const getListLaptopHomeSuccess = createAction(GET_LIST_LAPTOP_HOME_SUCCESS)

import { createAction } from "@reduxjs/toolkit"

export const GET_ACCESSORY = 'GET_ACCESSORY'
export const GET_ACCESSORY_SUCCESS = 'GET_ACCESSORY_SUCCESS'
export const getAccessoryAction = createAction(GET_ACCESSORY)
export const getAccessorySuccess = createAction(GET_ACCESSORY_SUCCESS)

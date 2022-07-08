import { createAction } from "@reduxjs/toolkit"

export const GET_HEADER = 'GET_HEADER'
export const getHeaderAction = createAction(GET_HEADER)
export const GET_HEADER_SUCCESS = 'GET_HEADER_SUCCESS'
export const getHeaderSuccess = createAction(GET_HEADER_SUCCESS)

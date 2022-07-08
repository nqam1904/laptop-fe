import { createAction } from "@reduxjs/toolkit"

export const GET_BANNER = 'GET_BANNER'
export const GET_BANNER_SUCCESS = 'GET_BANNER_SUCCESS'
export const getBannerAction = createAction(GET_BANNER)
export const getBannerSuccess = createAction(GET_BANNER_SUCCESS)
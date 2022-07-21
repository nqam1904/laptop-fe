import { createAction } from "@reduxjs/toolkit"

export const GET_FOOTER = 'GET_FOOTER'
export const GET_FOOTER_SUCCESS = 'GET_FOOTER_SUCCESS'

export const getFooterAction = createAction(GET_FOOTER)
export const getFooterSuccess = createAction(GET_FOOTER_SUCCESS)


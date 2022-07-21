import { createAction } from "@reduxjs/toolkit"

export const GET_SECTION = 'GET_SECTION'
export const GET_SECTION_SUCCESS = 'GET_SECTION_SUCCESS'
export const getSectionAction = createAction(GET_SECTION)
export const getSectionSuccess = createAction(GET_SECTION_SUCCESS)
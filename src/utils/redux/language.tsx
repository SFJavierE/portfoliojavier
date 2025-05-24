import { createSlice } from '@reduxjs/toolkit'
import { Languages } from '../interfaces/Interfaces'

const initialState : Languages = {
    value: 'EN'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state) => {
        if(state.value == 'ES') state.value = 'EN'
        else state.value = 'ES'
    }
  },
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer
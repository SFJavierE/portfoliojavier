import { configureStore } from '@reduxjs/toolkit'
import languageSlice from './language'

export default configureStore({
  reducer: {
    language: languageSlice
  },
})
import { configureStore } from '@reduxjs/toolkit'
import languageSlice from './language'
import refsSlice from './refs'

export default configureStore({
  reducer: {
    language: languageSlice,
    refs: refsSlice
  },
})
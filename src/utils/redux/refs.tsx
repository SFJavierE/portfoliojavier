import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { ReduxRefs } from '../interfaces/Interfaces'

const initialState : ReduxRefs = {
    value: {
        homeRef: React.createRef<HTMLDivElement>(),
        skillsRef: React.createRef<HTMLDivElement>(),
        jobsRef: React.createRef<HTMLDivElement>(),
        educationsRef: React.createRef<HTMLDivElement>(),
        projectsRef: React.createRef<HTMLDivElement>(),
        aboutMeRef: React.createRef<HTMLDivElement>()
    }
}

export const refsSlice = createSlice({
  name: 'refs',
  initialState,
  reducers: {
    setAllRefs: (state, action) => {
        state.value = action.payload
    }
  },
})

export const { setAllRefs } = refsSlice.actions

export default refsSlice.reducer
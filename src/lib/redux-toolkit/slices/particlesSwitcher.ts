"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const particlesSlice = createSlice({
  name: 'counter',
  initialState: true,
  reducers: {
    Switcher: (state, action: PayloadAction<boolean>) => {
      return !state
    }
  },
})
export const { Switcher } = particlesSlice.actions
export default particlesSlice.reducer
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type ThemeMode = 'light' | 'dark'

type ThemeState = {
  mode: ThemeMode
}

const preferredMode = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return 'dark'
}

const initialState: ThemeState = {
  mode: preferredMode(),
}

/* WHY: theme mode is tiny but global. A slice cleanly separates app-wide UI
   state from component-local state such as form drafts or hover affordances. */
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload
    },
    toggleThemeMode: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
  },
})

export const { setThemeMode, toggleThemeMode } = themeSlice.actions
export default themeSlice.reducer

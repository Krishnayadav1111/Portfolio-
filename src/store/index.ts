import { configureStore } from '@reduxjs/toolkit'
import { portfolioApi } from '../services/portfolioApi'
import themeReducer from './slices/themeSlice'

/* WHY: a single store boundary gives RTK Query one cache for every page.
   That keeps shared portfolio data from being fetched twice across routes. */
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portfolioApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'

import carrinnhoReducer from './reducers/carrinho'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinnhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

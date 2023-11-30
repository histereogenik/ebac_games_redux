import {
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'

import carrinnhoReducer from './reducers/carrinho'

import api from '../services/api'

// export const store = configureStore({
//   reducer: {
//     carrinho: carrinnhoReducer,
//     [api.reducerPath]: api.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware)
// })

const rootReducer = combineReducers({
  carrinho: carrinnhoReducer,
  [api.reducerPath]: api.reducer
})

export function configuraStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configuraStore>

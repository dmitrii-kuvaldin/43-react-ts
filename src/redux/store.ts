import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import productsSlice from '../features/products/productsSlice';


export const store = configureStore({
  reducer: {
    // подключаем slice к store
    products: productsSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

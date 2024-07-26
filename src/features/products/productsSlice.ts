import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../components/shop/Shop';
import { getProducts } from './productsAction';


// ? В REDUX мы работаем с тремя основными сущностями

// * 1. Store - хранилище данных
// * 2. Slice - описание логики изменения данных (срез)
// * 3. Actions - действия с данными (синх и асинх)


// описываем интерфейс для данных в state
interface IProductState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

// описываем state для store с начальными состояниями
const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: '',
};

// срез данных, которые мы группируем по общей теме (products, user...)
// он создается с помощью функции createSlice()
// здесь мы описываем логику работы с данными из синхронных и асинхронных действие по данной теме

export const productsSlice = createSlice({
  // уникально имя slice
  name: 'productsSlice',
  // передаем начальное значение
  initialState,
  // логика синхронных действий
  reducers: {},
  // логика асинхронных действий
  // обрабатываем три состояния promise
  extraReducers: (builder) => {
    builder
      // действия, когда данные еще не пришли
      .addCase(getProducts.pending, (state) => {
        // включаем loader
        state.isLoading = true;
      })
       // действия, когда данные пришли с успехом
      .addCase(getProducts.fulfilled, (state, action) => {
        // выключаем загрузку
        state.isLoading = false;
        // добавляем данные в state при успехе
        state.products = action.payload;
      })
        // действия, когда данные пришли с ошибкой
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      });
  },
});

export default productsSlice;
// export const { } = productsSlice.actions;

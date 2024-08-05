import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../components/shop/Shop';
import { getProducts } from './productsAction';



interface IProductState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: '',
};


export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.payload as string;
      });
  },
});

export default productsSlice;
// export const { } = productsSlice.actions;

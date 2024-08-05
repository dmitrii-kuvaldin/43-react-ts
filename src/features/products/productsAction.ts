import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const getProducts = createAsyncThunk(
  'getProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



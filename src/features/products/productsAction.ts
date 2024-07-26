import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// описание асинхронного запроса
// такие функции называют actions
// на каждый новый запрос мы создаем свой action с помощью функции из redux createAsyncThunk()

export const getProducts = createAsyncThunk(
  // первый параметр - строка с уникальным именем для action
  'getProducts',
  // второй параметр - асинхронная функция с запросом
  async (_, thunkAPI) => {
    try {
      // axios - это библиотека надстройка над fetch, упрощающая логику запросов
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



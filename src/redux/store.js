import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../features/books/bookSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;

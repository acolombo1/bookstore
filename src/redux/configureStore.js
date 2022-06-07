/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import catReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: catReducer,
  },
});

store.subscribe(() => console.log(store.getState()));

export default store;

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import catReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: catReducer,
  },
  middleware: [thunk],
});

export default store;

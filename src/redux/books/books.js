import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REM_BOOK = 'REM_BOOK';
const GET_BOOKS = 'GET_BOOKS';

export function addBookObject(book) {
  const data = { id: uuidv4(), title: book.title, author: book.author };
  return { type: ADD_BOOK, payload: data };
}

export function removeBookObject(id) {
  return { type: REM_BOOK, id };
}

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REM_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;

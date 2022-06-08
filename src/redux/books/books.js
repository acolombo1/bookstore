import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REM_BOOK = 'REM_BOOK';

export function addBookObject(book) {
  const data = { id: uuidv4(), title: book.title, author: book.author };
  return { type: ADD_BOOK, payload: data };
}

export function removeBookObject(id) {
  return { type: REM_BOOK, id };
}

const initialState = [
  {
    id: 1, category: 'Action', title: 'The Hunger Game', author: 'Suzanne Collins',
  },
  {
    id: 2, category: 'Science Fiction', title: 'Dune', author: 'Frank Herbert',
  },
  {
    id: 3, category: 'Economy', title: 'Capital in the 21st Century', author: 'Suzanne Collins',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REM_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;

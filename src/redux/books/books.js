const ADD_BOOK = 'ADD_BOOK';
const REM_BOOK = 'REM_BOOK';

let nextId = 0;

export function addBookObject(title, author) {
  nextId += 1;
  const data = { id: nextId, title, author };
  return { type: ADD_BOOK, payload: data };
}

export function removeBookObject(id) {
  return { type: REM_BOOK, id };
}

const bookReducer = (state = [], action) => {
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

import { v4 as uuidv4 } from 'uuid';

export const initialState = [
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

export const apiCreateApp = async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/', {
    method: 'POST',
    body: '',
  });
  if (response.ok) {
    // const textresult = await response.text();
    // console.log(textresult);
  }
};

const APP_API_KEY = 'Nt5l5M1DZ1GZR2qlCkmu';

export const apiAddBook = (book) => async (dispatch) => {
  // book: {title: 'x', author: 'y'}
  // needed: { item_id: 'n', category: '', title: 'x', author: 'y' }
  const bookid = uuidv4();
  dispatch({ type: 'ADD_BOOK', payload: { id: bookid, title: book.title, author: book.author } });
  const bookfull = {
    item_id: bookid, category: '', title: book.title, author: book.author,
  };
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_API_KEY}/books`, {
    method: 'POST',
    body: JSON.stringify(bookfull),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

export const apiGetBooks = async (dispatch) => {
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_API_KEY}/books`, {
    method: 'GET',
  });
  if (response.ok) {
    const jsonresult = await response.json();
    // Convert {key1:[{title: x, author: y}], key2: etc } to
    // [{id: key1, title: x, author: y}, {id: key2, etc}]
    const books = [];
    let i = 0;
    Object.keys(jsonresult).forEach((key) => {
      books[i] = {};
      books[i].id = key;
      books[i].author = jsonresult[key][0].author;
      books[i].title = jsonresult[key][0].title;
      books[i].category = '(not specified)';
      i += 1;
    });
    dispatch({ type: 'GET_BOOKS', payload: books });
  }
};

export const apiDelBook = (itemId) => async (dispatch) => {
  dispatch({ type: 'REM_BOOK', id: itemId });
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_API_KEY}/books/${itemId}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: itemId }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

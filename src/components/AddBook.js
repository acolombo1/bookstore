import './AddBook.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { apiAddBook } from '../api';

function AddBook() {
  const dispatch = useDispatch();
  const [book, updateBook] = useState({ title: '', author: '' });
  const onTitleChange = (event) => {
    updateBook({ ...book, title: event.target.value });
  };
  const onAuthorChange = (event) => {
    updateBook({ ...book, author: event.target.value });
  };
  return (
    <>
      <div className="BookCard0" />
      <form className="addBook">
        <div className="Titleaddbook">ADD NEW BOOK</div>
        <div className="formproper">
          <input value={book.title} type="text" id="title" placeholder="Book Title" name="title" onChange={onTitleChange} />
          <input value={book.author} type="text" id="author" placeholder="Author" name="author" onChange={onAuthorChange} />
          <button
            className="AddButton"
            type="button"
            onClick={() => {
              if (book.title !== '' && book.author !== '') {
                dispatch(apiAddBook(book));
                updateBook({ title: '', author: '' });
              }
            }}
          >
            ADD BOOK
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBook;

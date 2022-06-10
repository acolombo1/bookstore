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
      <form className="addBook">
        ADD NEW BOOK
        <br />
        <input value={book.title} type="text" id="title" placeholder="Book Title" name="title" onChange={onTitleChange} />
        <input value={book.author} type="text" id="author" placeholder="Author" name="author" onChange={onAuthorChange} />
        <button
          type="button"
          onClick={() => {
            if (book.title !== '' && book.author !== '') {
              dispatch(apiAddBook(book));
              updateBook({ title: '', author: '' });
            }
          }}
        >
          Add Book
        </button>
      </form>
    </>
  );
}

export default AddBook;

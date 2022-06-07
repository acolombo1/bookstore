import store from '../redux/configureStore';
import { addBookObject } from '../redux/books/books';

function addABook() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  if (title.value !== '' && author.value !== '') {
    store.dispatch(addBookObject(title.value, author.value));
  }
}

function AddBook() {
  return (
    <>
      <form className="addBook">
        ADD NEW BOOK
        <br />
        <input type="text" id="title" placeholder="Book Title" name="title" />
        <input type="text" id="author" placeholder="Author" name="author" />
        <button type="button" onClick={addABook}>Add Book</button>
      </form>
    </>
  );
}

export default AddBook;

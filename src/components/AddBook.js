import { useDispatch } from 'react-redux';
import { addBookObject } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  return (
    <>
      <form className="addBook">
        ADD NEW BOOK
        <br />
        <input type="text" id="title" placeholder="Book Title" name="title" />
        <input type="text" id="author" placeholder="Author" name="author" />
        <button
          type="button"
          onClick={() => {
            const title = document.getElementById('title');
            const author = document.getElementById('author');
            if (title.value !== '' && author.value !== '') {
              dispatch(addBookObject(title.value, author.value));
              title.value = '';
              author.value = '';
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

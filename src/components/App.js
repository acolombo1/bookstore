import store from '../redux/configureStore';
import './App.css';
import Header from './Header';
import Book from './Book';
import MyAddBook from './AddBook';
import { removeBookObject } from '../redux/books/books';

export default function App() {
  const { books } = store.getState();
  const remBook = (id) => {
    store.dispatch(removeBookObject(id));
  };

  return (
    <div className="App">
      <Header />
      {books.map((book) => <Book key={book.id} category="??" title={book.title} author={book.author} onClick={() => remBook(book.id)} />)}
      <MyAddBook />
    </div>
  );
}

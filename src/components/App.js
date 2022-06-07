// import store from '../redux/configureStore';
import './App.css';
import Header from './Header';
import Book from './Book';
import MyAddBook from './AddBook';
// import { removeBookObject } from '../redux/books/books';

export default function App() {
  // const { books } = store.getState();
  // const remBook = (id) => {
  //   store.dispatch(removeBookObject(id));
  // };

  // {books.map((book) => <Book key={book.id} category="??"
  // title={book.title} author={book.author} onClick={() => remBook(book.id)} />)}

  return (
    <div className="App">
      <Header />
      <Book category="Action" title="The Hunger Game" author="Suzanne Collins" />
      <Book category="Science Fiction" title="Dune" author="Frank Herbert" />
      <Book category="Economy" title="Capital in the 21st Century" author="Suzanne Collins" />
      <MyAddBook />
    </div>
  );
}

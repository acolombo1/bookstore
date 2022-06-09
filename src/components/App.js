import { shallowEqual, useSelector } from 'react-redux';
import './App.css';
import Header from './Header';
import Book from './Book';
import MyAddBook from './AddBook';

export default function App() {
  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <div className="App">
      <Header />
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          category={book.category}
          title={book.title}
          author={book.author}
        />
      ))}
      <MyAddBook />
    </div>
  );
}

import './App.css';
import Header from './Header'
import Book from './Book'
import AddBook from './AddBook'

function App() {
  return (
    <div className="App">
      <Header />
      <Book category="Action" title="The Hunger Game" author="Suzanne Collins" />
      <Book category="Science Fiction" title="Dune" author="Frank Herbert" />
      <Book category="Economy" title="Capital in the 21st Century" author="Suzanne Collins" />
      <AddBook />
    </div>
  );
}

export default App;

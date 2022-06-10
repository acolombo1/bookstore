import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="BookstoreCMS">Bookstore CMS</div>
      <nav className="nav">
        <span className="BOOKS">
          <Link to="/">BOOKS</Link>
        </span>
        <span className="CATEGORIES">
          <Link to="/categories">CATEGORIES</Link>
        </span>
      </nav>
      <div className="Oval" />
    </header>
  );
}

export default Header;

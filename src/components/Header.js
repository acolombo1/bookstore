import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div>BOOKSTORE CMS</div>
      <nav className="nav">
        <Link to="/">BOOKS</Link>
        {' '}
        |
        {' '}
        <Link to="/categories">CATEGORIES</Link>
      </nav>
      <div className="Oval" />
    </header>
  );
}

export default Header;

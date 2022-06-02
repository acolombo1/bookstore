import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header class="header">
      <div>BOOKSTORE CMS</div>
      <nav className="nav">
        <Link to="/">BOOKS</Link>{' '}|{' '} 
        <Link to="/categories">CATEGORIES</Link> 
      </nav>
      <div class="Oval"></div>
    </header>
  );
}

export default Header;
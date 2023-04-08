import css from './Header.module.css';
import { Link } from './Header.styled';

function Header() {
  return (
    <header>
      <nav className={css.header}>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  );
}

export default Header;

import { Link } from 'react-router-dom';

import { useTheme } from '../../hooks/useTheme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="link" to="/">
          <h1 className="text text--title text--white">Where in the world?</h1>
        </Link>
        <button
          type="button"
          className="button button--invisible"
          onClick={toggleTheme}
          aria-pressed={isDark}
        >
          <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} mr`} aria-hidden="true"></i>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}

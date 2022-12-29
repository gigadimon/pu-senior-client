import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { SearchForm } from './SearchForm/SearchForm';
import s from './Header.module.css';
import FoundOperators from './FoundOperators/FoundOperators';

export default function Header() {
  const [foundOperators, setFoundOperators] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function keyCloseSearch(e) {
      if (e.code === 'Escape') {
        setIsOpen(false);
        document.removeEventListener('keydown', keyCloseSearch);
      }
    }
    isOpen && document.addEventListener('keydown', keyCloseSearch);
  }, [isOpen]);

  function handleClick(event) {
    event.target.nodeName !== 'INPUT' && event.target.nodeName !== 'UL' && setIsOpen(false);
  }

  const { agentId } = useParams();
  return (
    <>
      <header className={s.header} onClick={handleClick}>
        {agentId && (
          <NavLink className={s.link} to={-1}>
            Go back
          </NavLink>
        )}
        {!agentId && (
          <>
            <SearchForm
              setFoundOperators={setFoundOperators}
              setLoading={setLoading}
              setIsOpen={setIsOpen}
            />
            <FoundOperators
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              loading={loading}
              foundOperators={foundOperators}
            />
          </>
        )}

        <div className={s.navContainer}>
          <NavLink className={s.link} to="/">
            Home
          </NavLink>
          <NavLink className={s.link} to="/">
            Bots
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}

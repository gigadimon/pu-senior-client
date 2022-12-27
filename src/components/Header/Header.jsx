import { NavLink, Outlet, useParams } from "react-router-dom";
import s from "./Header.module.css";

export default function Header() {
  const { agentId } = useParams();
  return (
    <>
      <header className={s.header}>
        {agentId && (
          <NavLink className={s.link} to={-1}>
            Go back
          </NavLink>
        )}
        <div className={s.navContainer}>
          <NavLink className={s.link} to="/">
            Home
          </NavLink>
          <NavLink className={s.link}  to="/">
            Bots
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}

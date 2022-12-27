// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getAgent } from "../../asyncService/getAgent";
// import { Blocks } from "react-loader-spinner";
import { NavLink, Outlet } from "react-router-dom";
import s from "./AgentProfile.module.css";

export default function AgentProfile() {
  // const [agent, setAgent] = useState({});

  return (
    <section className={s.container}>
      <nav className={s.navigation}>
        <NavLink to="general" className={`${s.profile} ${s.link}`}>
          Профиль
        </NavLink>
        <NavLink to="localize" className={`${s.link}`}>
          Отделы и языки
        </NavLink>
        <NavLink to="activity" className={`${s.link}`}>
          Активность
        </NavLink>
      </nav>
      <Outlet className={s.outlet} />
    </section>
  );
}

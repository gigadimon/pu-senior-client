import { useState } from "react";
import { DepartmentList } from "../DepartmentList";
import s from "./DepartmentSection.module.css";

export function DepartmentSection({ webimState }) {
  const [filter, setFilter] = useState("");
  return (
    <section className={s.section}>
      <input
        placeholder="найти операторов на смене"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.currentTarget.value)}
        className={s.input}
      />
      <DepartmentList filter={filter} webimState={webimState} />
    </section>
  );
}

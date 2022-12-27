import { normalizeTime } from "../../../helpers/normalizeTime";
import s from "./QueueByDepartSection.module.css";

export const QueueByDepartSection = ({ departmentInfo }) => {
  return (
    <section className={s.queueSection}>
      <div className={s.headerLine}>
        <span className={`${s.elem} ${s.headerElem}`}>Отдел</span>
        <span className={`${s.elem} ${s.headerElem}`}>В диалоге</span>
        <span className={`${s.elem} ${s.headerElem}`}>Онлайн очередь</span>
        <span className={`${s.elem} ${s.headerElem}`}>Ожидание</span>
        <span className={`${s.elem} ${s.headerElem}`}>Оффлайн очередь</span>
        <span className={`${s.elem} ${s.headerElem}`}>Ожидание</span>
      </div>
      <ul>
        {departmentInfo.map((el) => (
          <li
            key={el.department.name}
            className={`${s.dynamicLine} ${
              el.online.waiting && el.online.max_waiting_time >= 1 && s.waiting
            }`}
          >
            <span className={`${s.elem} ${s.dynamicElem}`}>
              {el.department.name}
            </span>
            <span className={`${s.elem} ${s.dynamicElem}`}>
              {el.online.in_process}
            </span>
            <span className={`${s.elem} ${s.dynamicElem}`}>
              {el.online.waiting}
            </span>
            <span className={`${s.elem} ${s.dynamicElem}`}>
              {normalizeTime(el.online.max_waiting_time).string}
            </span>
            <span className={`${s.elem} ${s.dynamicElem}`}>
              {el.offline.waiting}
            </span>
            <span className={`${s.elem} ${s.dynamicElem}`}>
              {normalizeTime(el.offline.max_waiting_time).string}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

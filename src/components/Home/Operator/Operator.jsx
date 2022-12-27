import { Link } from "react-router-dom";
import { normalizeTime } from "../../../helpers/normalizeTime";
import s from "./Operator.module.css";

export const Operator = ({ operator }) => {
  return (
    <li className={s.operatorElement}>
      <Link className={s.link} to={`agent/${operator.id}/general`}>
        <div>
          <span
            style={{ backgroundColor: operator.color }}
            className={s.statusColor}
          ></span>
          <span className={s.operatorName}>{operator.fullname}</span>
        </div>

        <div>
          <span className={s.status}>{operator.status}</span>
          <span>
            {normalizeTime(operator.ts_diff_in_current_status).string}
          </span>
        </div>
      </Link>
    </li>
  );
};

import s from "./OffendersList.module.css";
import { Operator } from "../Operator/Operator";
import { getUniqueOffenders } from "../../../helpers/handleOffenders";

export const OffendersList = ({ webimState, triggerStatuses }) => {
  return (
    <ul className={s.offendersList}>
      {getUniqueOffenders(webimState, triggerStatuses).map((operator) => (
        <Operator operator={operator} key={operator.id} />
      ))}
    </ul>
  );
};

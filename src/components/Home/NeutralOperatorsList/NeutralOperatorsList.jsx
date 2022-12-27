import s from "./NeutralOperatorsList.module.css";
import { Operator } from "../Operator/Operator";
import { getOperatorsInNeutralStatuses } from "../../../helpers/getOperatorsInNeutralStatuses";

export function NeutralOperatorsList({ checkedStatuses, webimState }) {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Нейтральные операторы</h2>
      <ul>
        {getOperatorsInNeutralStatuses(
          webimState,
          checkedStatuses.neutralStatuses
        ).map((operator) => (
          <Operator operator={operator} key={operator.id} />
        ))}
      </ul>
    </section>
  );
}

import s from './NeutralOperatorsList.module.css';
import { Operator } from '../Operator/Operator';
import { getOperatorsInNeutralStatuses } from '../../../helpers/getOperatorsInNeutralStatuses';
import { selectNeutralStatuses, selectWebimState } from '../../../redux/selectors';
import { useSelector } from 'react-redux';

export function NeutralOperatorsList() {
  const webimState = useSelector(selectWebimState);
  const neutralStatuses = useSelector(selectNeutralStatuses);
  return (
    <section className={s.section}>
      <h2 className={s.title}>Нейтральные операторы</h2>
      <ul>
        {getOperatorsInNeutralStatuses(webimState, neutralStatuses).map((operator) => (
          <Operator operator={operator} key={operator.id} />
        ))}
      </ul>
    </section>
  );
}

import s from './OffendersList.module.css';
import { Operator } from '../Operator/Operator';
import { getUniqueOffenders } from '../../../helpers/handleOffenders';
import { selectWebimState, selectTriggerStatuses } from '../../../redux/selectors.js';
import { useSelector } from 'react-redux';

export const OffendersList = () => {
  const triggerStatuses = useSelector(selectTriggerStatuses);
  const webimState = useSelector(selectWebimState);

  return (
    <ul className={s.offendersList}>
      {getUniqueOffenders(webimState, triggerStatuses).map((operator) => (
        <Operator operator={operator} key={operator.id} />
      ))}
    </ul>
  );
};

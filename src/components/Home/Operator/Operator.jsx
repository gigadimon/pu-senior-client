import { Link } from 'react-router-dom';
import { normalizeTime } from '../../../helpers/normalizeTime';
import { clearOfflineList, disconnectAgentAction } from '../../../redux/webimSlice';
import turnOffBtn from '../../../images/system_shutdown_icon_180898.svg';
import { useDispatch } from 'react-redux';
import s from './Operator.module.css';

export const Operator = ({ operator }) => {
  const dispatch = useDispatch();
  async function handleDisconnect(e) {
    if (window.confirm(`Хочешь отключить ${operator.fullname ?? operator.name}?`)) {
      alert(`${operator.fullname ?? operator.name} отключён`);
      dispatch(disconnectAgentAction(operator.id));
      return setTimeout(() => dispatch(clearOfflineList()), 15000);
    }
  }

  return (
    <li className={s.operatorElement}>
      {operator.status !== 'Офлайн' && (
        <button type="button" className={s.disconnect} onClick={handleDisconnect}>
          <img src={turnOffBtn} alt="turn off button" />
        </button>
      )}
      <Link className={s.link} to={`agent/${operator.id}/general`}>
        <div>
          <span
            style={{ backgroundColor: operator.color || operator.statusColor }}
            className={s.statusColor}></span>
          <span className={s.operatorName}>{operator.fullname || operator.name}</span>
        </div>

        <div>
          <span className={s.status}>{operator.status}</span>
          {operator.ts_diff_in_current_status && (
            <span>{normalizeTime(operator.ts_diff_in_current_status).string}</span>
          )}
        </div>
      </Link>
    </li>
  );
};

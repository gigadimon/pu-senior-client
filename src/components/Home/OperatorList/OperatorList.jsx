import { useSelector } from 'react-redux';
import { selectOfflineList } from '../../../redux/selectors';
import { Operator } from '../Operator/Operator';
import s from './OperatorList.module.css';

export const OperatorList = ({ departmentInfo, filter }) => {
  const offlineList = useSelector(selectOfflineList);

  return (
    <ul className={s.list}>
      {departmentInfo.operators.map((elem) => {
        return (
          elem.fullname.toLowerCase().includes(filter.toLowerCase()) &&
          !offlineList.includes(elem.id) && <Operator operator={elem} key={elem.id} />
        );
      })}
    </ul>
  );
};

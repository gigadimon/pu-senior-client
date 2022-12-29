import s from './FoundOperators.module.css';
import { Operator } from '../../Home/Operator/Operator';
import { ProgressBar } from 'react-loader-spinner';

export default function FoundOperators({ loading, foundOperators, isOpen, setIsOpen }) {
  function handleClose(e) {
    e.target.nodeName !== 'UL' && setIsOpen(false);
  }

  return (
    <div className={`${isOpen ? s.isOpen : s.isClose}`} onClick={handleClose}>
      {!loading ? (
        foundOperators.length < 10 && (
          <ul className={s.list}>
            {foundOperators.map((operator) => (
              <Operator operator={operator} key={operator.id} />
            ))}
          </ul>
        )
      ) : (
        <ProgressBar
          className={s.proggress}
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
      )}
    </div>
  );
}

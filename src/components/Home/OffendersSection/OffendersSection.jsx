import s from './OffendersSection.module.css';
import { OffendersList } from '../OffendersList/OffendersList';

export const OffendersSection = () => {
  return (
    <div className={s.offendersContainer}>
      <h1 className={s.title}>Нарушители &#128680;</h1>
      <OffendersList />
    </div>
  );
};

import s from "./OffendersSection.module.css";
import { OffendersList } from "../OffendersList/OffendersList";

export const OffendersSection = ({
  webimState,
  checkedStatuses: { triggerStatuses },
}) => {
  return (
    <div className={s.offendersContainer}>
      {Boolean(webimState.length) && (
        <>
          <h1 className={s.title}>Нарушители &#128680;</h1>
          <OffendersList
            webimState={webimState}
            triggerStatuses={triggerStatuses}
          />
        </>
      )}
    </div>
  );
};

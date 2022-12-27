import { normalizeTime } from "./normalizeTime";

const getOperatorsInTriggerStatus = (webimState, triggerStatuses) => {
  return webimState.flatMap((el) =>
    el.operators.filter(
      (elem) =>
        Object.keys(triggerStatuses).includes(elem.status) &&
        (normalizeTime(elem.ts_diff_in_current_status).minutes >=
          triggerStatuses[`${elem.status}`] ||
          normalizeTime(elem.ts_diff_in_current_status).hours > 0)
    )
  );
};

export const getUniqueOffenders = (webimState, triggerStatuses) => {
  return getOperatorsInTriggerStatus(webimState, triggerStatuses).reduce(
    (acc, elem) =>
      !acc.some((el) => el.fullname === elem.fullname) &&
      !elem.fullname.includes("BRA") &&
      !elem.fullname.includes("TL") &&
      !elem.fullname.includes("ST") &&
      !elem.fullname.includes("admin")
        ? [...acc, elem]
        : acc,
    []
  );
};

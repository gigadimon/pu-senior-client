import { useEffect, useState } from "react";
import { OperatorList } from "../OperatorList/OperatorList";
import s from "./Department.module.css";

export const Department = ({ departmentInfo, filter }) => {
  const [openForClick, setOpenForClick] = useState(false);
  const [openForFilter, setOpenForFilter] = useState(false);
  function handleClick() {
    setOpenForClick((prevState) => !prevState);
  }

  useEffect(() => {
    filter.length && !openForFilter && setOpenForFilter(true);
    !filter.length && setOpenForFilter(false);
  }, [filter, openForFilter]);

  return (
    departmentInfo.operators.some((elem) =>
      elem.fullname.toLowerCase().includes(filter.toLowerCase())
    ) && (
      <li>
        <h2 className={s.departName} onClick={handleClick}>
          {`${departmentInfo.department} ${openForClick ? "▲" : "▼"}`}
        </h2>
        {(openForClick || openForFilter) && (
          <OperatorList filter={filter} departmentInfo={departmentInfo} />
        )}
      </li>
    )
  );
};

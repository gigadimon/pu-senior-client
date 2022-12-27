import { Operator } from "../Operator/Operator";
import s from "./OperatorList.module.css";

export const OperatorList = ({ departmentInfo, filter }) => {
  return (
    <ul className={s.list}>
      {departmentInfo.operators.map((elem) => {
        return (
          elem.fullname.toLowerCase().includes(filter.toLowerCase()) && (
            <Operator operator={elem} key={elem.id} />
          )
        );
      })}
    </ul>
  );
};

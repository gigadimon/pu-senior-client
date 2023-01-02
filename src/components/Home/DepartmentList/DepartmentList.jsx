import { Department } from '../Department/Department';
import { selectWebimState } from '../../../redux/selectors.js';
import { useSelector } from 'react-redux';
// import s from "./DepartmentList.module.css";

export const DepartmentList = ({ filter }) => {
  const webimState = useSelector(selectWebimState);
  return (
    <ul>
      {webimState?.map((departmentInfo) => (
        <Department
          filter={filter}
          departmentInfo={departmentInfo}
          key={departmentInfo.department}
        />
      ))}
    </ul>
  );
};

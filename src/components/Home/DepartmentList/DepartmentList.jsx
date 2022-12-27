import { Department } from "../Department/Department";
// import s from "./DepartmentList.module.css";

export const DepartmentList = ({ webimState, filter }) => {
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

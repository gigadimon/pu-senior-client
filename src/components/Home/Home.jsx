import { useEffect, useState } from "react";
import { getWebimState } from "../../asyncService/getWebimState";
import { DepartmentSection } from "./DepartmentSection/DepartmentSection";
import { OffendersSection } from "./OffendersSection/OffendersSection";
import { QueueByDepartSection } from "./QueueByDepartSection/QueueByDepartSection";
import { NeutralOperatorsList } from "./NeutralOperatorsList/NeutralOperatorsList";
import { Blocks } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Home.module.css";

export default function Home() {
  const [webimState, setWebimState] = useState([]);
  const [checkedStatuses, setCheckedStatuses] = useState({});
  const [departmentInfo, setDepartmentInfo] = useState([]);

  useEffect(() => {
    async function setWebimInterval() {
      const { info, checkedStatuses, departInfo } = await getWebimState();
      setWebimState(info?.filter((el) => el.department !== "No department"));
      setCheckedStatuses(checkedStatuses);
      setDepartmentInfo(
        departInfo?.filter((el) => el.department.name !== "No department")
      );
    }
    setWebimInterval();
    const intervalId = setInterval(setWebimInterval, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (webimState) console.log(webimState);
  }, [webimState]);

  useEffect(() => {
    if (departmentInfo) console.log(departmentInfo);
  }, [departmentInfo]);

  return Boolean(webimState.length) ? (
    <section className={s.homeSection}>
      <div className={s.wrapper}>
        <QueueByDepartSection departmentInfo={departmentInfo} />
        <OffendersSection
          webimState={webimState}
          checkedStatuses={checkedStatuses}
        />
      </div>
      <div className={s.triggerWrapper}>
        <DepartmentSection webimState={webimState} />
        <NeutralOperatorsList
          checkedStatuses={checkedStatuses}
          webimState={webimState}
        />
      </div>
    </section>
  ) : (
    <Blocks
      className={s.spinner}
      visible={true}
      height="160"
      width="160"
      ariaLabel="blocks-loading"
      wrapperClass="blocks-wrapper"
    />
  );
}

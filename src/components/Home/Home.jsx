import { useEffect } from 'react';
import { DepartmentSection } from './DepartmentSection/DepartmentSection';
import { OffendersSection } from './OffendersSection/OffendersSection';
import { QueueByDepartSection } from './QueueByDepartSection/QueueByDepartSection';
import { NeutralOperatorsList } from './NeutralOperatorsList/NeutralOperatorsList';
import { getWebimStateAction } from '../../redux/webimSlice';
import { selectWebimState, selectDepartInfo } from '../../redux/selectors.js';
import { Blocks } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const webimState = useSelector(selectWebimState);
  const departmentInfo = useSelector(selectDepartInfo);

  useEffect(() => {
    async function setWebimInterval() {
      dispatch(getWebimStateAction());
    }
    setWebimInterval();
    const intervalId = setInterval(setWebimInterval, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  useEffect(() => {
    if (webimState) console.log(webimState);
  }, [webimState]);

  useEffect(() => {
    if (departmentInfo) console.log(departmentInfo);
  }, [departmentInfo]);

  return Boolean(webimState.length) ? (
    <section className={s.homeSection}>
      <div className={s.wrapper}>
        <QueueByDepartSection />
        <OffendersSection />
      </div>
      <div className={s.triggerWrapper}>
        <DepartmentSection />
        <NeutralOperatorsList />
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

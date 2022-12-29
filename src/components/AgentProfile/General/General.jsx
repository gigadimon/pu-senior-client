import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAgentInfo } from "../../../redux/agentSlice";
import { selectAgent } from "../../../redux/selectors";
import { Blocks } from "react-loader-spinner";
import s from "./General.module.css";

export default function General() {
  const dispatch = useDispatch();
  const agent = useSelector(selectAgent);
  const { agentId } = useParams();
  // const [change, setChange] = useState(false);
  const change = false;

  useEffect(() => {
    `${agent.id}` !== `${agentId}` &&
      dispatch(getAgentInfo(agentId));
  }, [dispatch, agentId, agent.id]);

  useEffect(() => {
    console.log(agent);
  }, [agent]);

  function submitHandler(e) {
    e.preventDefault();
  }
  return `${agent.id}` === `${agentId}` ? (
    <div className={s.mainContainer}>
      <h1>Профиль сотрудника {agent?.name}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Внутреннее имя: </label>
          {change ? (
            <input id="name" value={agent?.name} />
          ) : (
            <span>{agent?.name}</span>
          )}
        </div>
        <div>
          <label htmlFor="visibleName">Имя в чате: </label>
          {change ? (
            <input id="visibleName" value={agent?.config?.visibleName} />
          ) : (
            <span>{agent?.config?.visibleName}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          {change ? (
            <input id="email" value={agent?.email} />
          ) : (
            <span>{agent?.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="limit">Лимит: </label>
          {change ? (
            <input id="limit" value={agent?.config?.maxChatsPerOperator} />
          ) : (
            <span>{agent?.config?.maxChatsPerOperator ?? "4"}</span>
          )}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
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

import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useContext,
} from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "./App";
import "./Task.css";
import { LangContext } from ".";

const Task = ({
  title,
  keyId,
  deadline,
  firstName,
  lastName,
  completion,
  completeList,
  incompleteList,
  setCompleteList,
  setIncompleteList,
  associatedArr,
}) => {
  const context = useContext(LangContext);
  const [isComplete, setIsComplete] = useState(completion);
  const formatDate = (currentDate) => {
    const date = new Date(currentDate);
    const day = date.getDate();
    const month = date.getMonth();
    const hour = date.getHours();
    const months =
      context.lang === "en"
        ? [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]
        : [
            "იან",
            "თებ",
            "მარ",
            "აპრ",
            "მაი",
            "ივნ",
            "ივლ",
            "აგვ",
            "სექ",
            "ოქტ",
            "ნოვ",
            "დეკ",
          ];
    return `${day} ${months[month]} ${
      context.lang === "en" ? "at" : ""
    } ${hour} ${context.lang === "en" ? "" : "საათზე"}`;
  };
  const text = {
    complete: context.lang === "en" ? "Mark Complete" : "მონიშნე დასრულებულად",
    incomplete:
      context.lang === "en" ? "Mark Incomplete" : "მონიშნე დაუსრულებლად",
    edit: context.lang === "en" ? "Edit" : "რედაქტირება",
    delete: context.lang === "en" ? "Delete" : "წაშლა",
  };
  const handleCompletion = () => {
    setIsComplete((prev) => {
      const newIsComplete = !prev;
      let url = "/tasks";
      let payload = [
        {
          _uuid: keyId,
          isComplete: newIsComplete,
        },
      ];
      axiosInstance.put(url, payload).catch((err) => console.log(err));
      return newIsComplete;
    });
  };

  const handleDeletion = () => {
    if (keyId) {
      const url = `/tasks/${keyId}`;
      axiosInstance.delete(url).catch((err) => console.log(err));
    }
    associatedArr((prev) => prev.filter((item) => item.id !== keyId));
  };

  useEffect(() => {
    if (isComplete && incompleteList) {
      setCompleteList((prev) => [
        ...incompleteList.filter((item) => item.id === keyId),
        ...prev,
      ]);
      setIncompleteList((prev) => prev.filter((item) => item.id !== keyId));
    } else if (!isComplete && completeList) {
      setIncompleteList((prev) => [
        ...completeList.filter((item) => item.id === keyId),
        ...prev,
      ]);
      setCompleteList((prev) => prev.filter((item) => item.id !== keyId));
    }
  }, [isComplete]);

  return (
    <div
      className="task"
      style={
        isComplete
          ? { border: "1px solid navy", borderLeft: "5px solid navy" }
          : null
      }
    >
      <div className="task-header">
        <h3>{title}</h3>
        <p>{formatDate(deadline)}</p>
        <p>{keyId}</p>
      </div>
      <div className="task-bottom">
        <p>{`${firstName} ${lastName}`}</p>
        <div className="task-bottom-buttons">
          <button type="button" onClick={handleCompletion}>
            {isComplete ? text.incomplete : text.complete}
          </button>
          <Link to={`/Edit/${keyId}`}>
            <button type="button">{text.edit}</button>
          </Link>
          <button type="button" onClick={handleDeletion}>
            {text.delete}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;

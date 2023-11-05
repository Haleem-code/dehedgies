import React from "react";
import Card from "./Taskcard";
import "./Styles/Tasks.css";
const Tasks = () => {
  return (
    <div className="task-body">
      <div className="task--body-col-1">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="task--body-col-2">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="task--body-col-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Tasks;

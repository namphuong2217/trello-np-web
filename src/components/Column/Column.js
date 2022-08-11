import React from "react";

import "./Column.scss";
import Task from "components/Task/Task";

function Column() {
  return (
    <div className="column">
      <header>Brainstorming</header>
      <ul className="task-list">
        <Task />
        <li className="task-item">Work list</li>
        <li className="task-item">Work list</li>
        <li className="task-item">Work list</li>
        <li className="task-item">Work list</li>
        <li className="task-item">Work list</li>
      </ul>
      <footer>Add another card</footer>
    </div>
  );
}

export default Column;

import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        task.completed ? "list-group-item-success" : ""
      }`}
    >
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>
      <div>
        <button
          className="btn btn-sm btn-success me-2"
          onClick={() => toggleTask(task.id)}
        >
          Terminer
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteTask(task.id)}
        >
          Supprimer
        </button>
      </div>
    </li>
  );
}

export default TaskItem;

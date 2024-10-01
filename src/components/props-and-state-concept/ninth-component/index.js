import React, { useState } from "react";

const NinthComponent = () => {
  // Initial list of tasks with their completion status
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete homework", isCompleted: false },
    { id: 2, text: "Wash the dishes", isCompleted: false },
    { id: 3, text: "Buy groceries", isCompleted: false },
  ]);

  // Function to toggle the completion status of a task
  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div>
      <p>
        To manage state for dynamic list items, you can either:
        <br />
        1. Store the state in an array or object and update the corresponding
        item when its state changes.
        <br />
        2. Create a separate component for each list item, so each item can
        manage its own state independently.
      </p>
      <div>
        <h3>Task List</h3>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              <span>{task.text}</span>
              <button onClick={() => toggleCompletion(task.id)}>
                {task.isCompleted ? "Undo" : "Complete"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NinthComponent;

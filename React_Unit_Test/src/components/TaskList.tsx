import { useState } from "react";
import type { Task } from "../../types/task";

const initialTasks: Task[] = [
  { id: 1, title: "Review profile details", completed: true },
  { id: 2, title: "Save favorite quote", completed: false },
  { id: 3, title: "Finish React practice session", completed: false },
];

function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <section className="card task-list">
      <div className="task-list-header">
        <div>
          <p className="section-label">Focus List</p>
          <h3>Today&apos;s Tasks</h3>
        </div>
        <span className="task-progress">
          {completedCount}/{tasks.length} done
        </span>
      </div>

      <div className="task-items">
        {tasks.map((task) => (
          <label
            key={task.id}
            className={`task-item ${task.completed ? "is-complete" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.title}</span>
          </label>
        ))}
      </div>
    </section>
  );
}

export default TaskList;

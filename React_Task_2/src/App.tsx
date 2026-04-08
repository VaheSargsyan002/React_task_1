import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import TodoItem from "./components/TodoItem";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

type Filter = "all" | "pending" | "completed";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const handleAddTask = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setTasks((current) => [
      ...current,
      {
        id: Date.now().toString(),
        text: trimmed,
        completed: false,
      },
    ]);
  };

  const handleToggleTask = (id: string) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleUpdateTask = (id: string, nextText: string) => {
    const trimmed = nextText.trim();
    if (!trimmed) return;

    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, text: trimmed } : task,
      ),
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const pendingCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - pendingCount;

  return (
    <div className="app-shell">
      <div className="todo-card">
        <header className="top-bar">
          <div>
            <p className="eyebrow">my_to_Do_ApP</p>
            <h1>Organize your day</h1>
            <p className="subtitle">
              Add, edit, complete, and filter tasks with light/dark theme
              support.
            </p>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} type="button">
            {theme === "light" ? "🌑 Dark Mode" : "☀️ Light Mode"}
          </button>
        </header>

        <TaskInput onAddTask={handleAddTask} />

        <FilterBar filter={filter} onChange={setFilter} />

        <section className="task-list-section">
          <div className="task-list-header">
            <h2>Tasks</h2>

            <div className="task-counts">
              <span className="pending">{pendingCount} pending</span>
              <span className="completed">{completedCount} completed</span>
            </div>
          </div>

          {filteredTasks.length > 0 ? (
            <div className="task-list">
              {filteredTasks.map((task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  onToggle={handleToggleTask}
                  onUpdate={handleUpdateTask}
                  onDelete={handleDeleteTask}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              {tasks.length === 0
                ? "Start by adding a new task above."
                : filter === "pending"
                  ? "No pending tasks yet."
                  : filter === "completed"
                    ? "No completed tasks yet."
                    : "No tasks to show."}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;

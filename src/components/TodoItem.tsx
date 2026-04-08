import { useEffect, useState } from "react";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
};

function TodoItem({ task, onToggle, onUpdate, onDelete }: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(task.text);

  useEffect(() => {
    if (!editing) setDraft(task.text);
  }, [task.text, editing]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextText = draft.trim();
    if (nextText === "") {
      onDelete(task.id);
    } else {
      onUpdate(task.id, nextText);
      setEditing(false);
    }
  };
  const handleCancel = () => {
    setDraft(task.text);
    setEditing(false);
  };

  return (
    <article className={`todo-item ${task.completed ? "completed" : ""}`}>
      <label className="checkbox-wrap">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="checkbox-custom" />
      </label>

      {editing ? (
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            value={draft}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDraft(e.target.value)
            }
            aria-label="Edit task"
            autoFocus
          />
          <div className="item-actions">
            <button type="submit" className="save-button">
              Save
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <span className="task-text">{task.text}</span>
          <div className="item-actions">
            <button
              type="button"
              onClick={() => setEditing(true)}
              aria-label="Edit task"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => onDelete(task.id)}
              aria-label="Delete task"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </article>
  );
}

export default TodoItem;

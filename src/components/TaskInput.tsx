import React, { useState } from "react";

type TaskInputProps = {
  onAddTask: (text: string) => void;
};

function TaskInput({ onAddTask }: TaskInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = input.trim();
    if (!value) return;

    onAddTask(value);
    setInput("");
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Task description"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskInput;

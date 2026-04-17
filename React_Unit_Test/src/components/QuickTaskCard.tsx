import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

type TodoResponse = {
  todo: string;
  completed: boolean;
};

function QuickTaskCard() {
  const { data, error, isLoading, isValidating, mutate } = useSWR<TodoResponse>(
    "https://dummyjson.com/todos/random",
    fetcher,
  );

  return (
    <section className="card quick-task-card">
      <div className="card-heading">
        <div>
          <p className="section-label">Live Task</p>
          <h3>Quick Focus</h3>
        </div>
        <button
          className="card-button"
          type="button"
          onClick={() => mutate()}
          disabled={isLoading || isValidating}
        >
          {isLoading || isValidating ? "Refreshing..." : "Get another"}
        </button>
      </div>

      {isLoading ? (
        <p className="card-state">Loading a live task...</p>
      ) : null}

      {error ? <p className="card-state">Could not load a task.</p> : null}

      {data ? (
        <>
          <p className="quick-task-text">{data.todo}</p>
          <p className="quick-task-meta">
            Status: {data.completed ? "Completed" : "Open"}
          </p>
        </>
      ) : null}
    </section>
  );
}

export default QuickTaskCard;

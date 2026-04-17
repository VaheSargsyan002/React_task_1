import { useState } from "react";

type WorkflowStep = {
  id: string;
  label: string;
  done: boolean;
};

const initialSteps: WorkflowStep[] = [
  { id: "draft", label: "Draft intro message", done: true },
  { id: "review", label: "Review quote card copy", done: false },
  { id: "share", label: "Share dashboard update", done: false },
];

function PreferenceChecklist() {
  const [steps, setSteps] = useState(initialSteps);

  const toggleStep = (id: string) => {
    setSteps((currentSteps) =>
      currentSteps.map((step) =>
        step.id === id ? { ...step, done: !step.done } : step,
      ),
    );
  };

  const completedCount = steps.filter((step) => step.done).length;

  return (
    <section className="card preference-checklist">
      <div className="card-heading">
        <div>
          <p className="section-label">Workflow</p>
          <h3>Action Queue</h3>
        </div>
        <span className="task-progress">{completedCount}/3 done</span>
      </div>

      <div className="task-items">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`task-item ${step.done ? "is-complete" : ""}`}
          >
            <span>{step.label}</span>
            <button
              className="card-button card-button-secondary"
              type="button"
              onClick={() => toggleStep(step.id)}
            >
              {step.done ? "Mark pending" : "Mark done"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PreferenceChecklist;

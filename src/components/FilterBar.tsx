type Filter = "all" | "pending" | "completed";

type FilterBarProps = {
  filter: Filter;
  onChange: (filter: Filter) => void;
};

const filterLabels: Record<Filter, string> = {
  all: "All",
  pending: "Pending",
  completed: "Completed",
};

function FilterBar({ filter, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar" role="group" aria-label="Task filters">
      {(["all", "pending", "completed"] as Filter[]).map((value) => (
        <button
          key={value}
          type="button"
          className={value === filter ? "active" : ""}
          onClick={() => onChange(value)}
        >
          {filterLabels[value]}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;

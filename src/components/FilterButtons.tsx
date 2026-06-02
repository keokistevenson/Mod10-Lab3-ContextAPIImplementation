import { useFilter } from "../context/FilterContext";
import type { Filter } from "../context/FilterContext";

const filters: Filter[] = ["all", "active", "completed"];

function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div>
      {filters.map((filterOption) => (
        <button
          key={filterOption}
          onClick={() => setFilter(filterOption)}
          style={{
            fontWeight: filter === filterOption ? "bold" : "normal",
          }}
        >
          {filterOption}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
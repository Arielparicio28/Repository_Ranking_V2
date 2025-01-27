import { useState } from "react";
import { RepoLimitSelectorProps } from "../interfaces/RepoLimitSelectorProps";



export const RepoLimitSelector = ({ onLimitChange }: RepoLimitSelectorProps) => {
  const [limit, setLimit] = useState(10);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setLimit(value);
      onLimitChange(value);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <label htmlFor="repo-limit" className="text-lg font-medium">
        Select the number of repositories:
      </label>
      <input
        id="repo-limit"
        type="number"
        min="1"
        max="100"
        value={limit}
        onChange={handleChange}
        className="border rounded px-3 py-2 w-32 text-center"
      />
      <select
        value={limit}
        onChange={handleChange}
        className="border rounded px-3 py-2 w-32"
      >
        {[5, 10, 20, 50, 100].map((value) => (
          <option key={value} value={value}>
            {value} Repos
          </option>
        ))}
      </select>
    </div>
  );
};

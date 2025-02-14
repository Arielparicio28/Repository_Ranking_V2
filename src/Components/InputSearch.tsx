import { useState } from "react";

interface InputSearchProps {
  onSearch: (language: string) => void;
}

const InputSearch = ({ onSearch }: InputSearchProps) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search.trim());
  };

  return (
    <section className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative w-9/12 max-w-md mt-9"
      >
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 p-1"
          type="submit"
        >
          <svg
            width={17}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          className="w-full rounded-full px-10 py-3 border-2 border-gray-200 focus:border-texth1 focus:outline-none placeholder-gray-400 transition-all duration-300 shadow-md"
          placeholder="Search language..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
          type="text"
        />
        <button
          type="reset"
          onClick={() => setSearch("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </form>
    </section>
  );
};

export default InputSearch

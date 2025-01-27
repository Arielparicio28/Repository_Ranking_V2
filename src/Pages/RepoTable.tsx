import { RepoTableProps } from "../interfaces/RepoTableProps";

export const RepoTable = ({ repositories }: RepoTableProps) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">
              Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">
              Owner
            </th>
            <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">
              Stars
            </th>
            <th className="border border-gray-300 px-4 py-2 text-sm md:text-base">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repo) => (
            <tr
              key={repo.id}
              className="hover:bg-gray-100 text-xs md:text-sm lg:text-base"
            >
              <td className="border border-gray-300 px-4 py-2 truncate max-w-xs">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {repo.name}
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2 truncate max-w-xs">
                {repo.owner.login}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {repo.stargazers_count}
              </td>
              <td className="border border-gray-300 px-4 py-2 truncate max-w-md">
                {repo.description || "No description available"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

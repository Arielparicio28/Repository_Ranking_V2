import { useEffect, useState } from "react";
import Header from "./Components/Header";
import InputSearch from "./Components/InputSearch";
import { ThemeSwitcher } from "./Components/ThemeSwitcher";
import { useTheme } from "@heroui/use-theme";
import { fetchRepositories } from "./services/githubService";
import { RepoLimitSelector } from "./Components/RepoLimitSelector";
import { RepoTable } from "./Pages/RepoTable";

function App() {
  const { theme } = useTheme();
  const [limit, setLimit] = useState(10);
  const [language, setLanguage] = useState("");
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const repos = await fetchRepositories(limit, language);
      setRepositories(repos);
    };
    fetchData();
  }, [limit, language]);

  return (
    <main
      className={`${theme} min-h-screen text-texth1 bg-background flex flex-col`}
    >
      <ThemeSwitcher />
      <Header />
      <InputSearch onSearch={setLanguage} />
       <RepoLimitSelector onLimitChange={setLimit} />
            <div className="mt-6">
              <RepoTable repositories={repositories} />
            </div>
    </main>
  );
}

export default App;

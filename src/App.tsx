import Header from "./Components/Header";
import InputSearch from "./Components/InputSearch";
import { ThemeSwitcher } from "./Components/ThemeSwitcher";
import { useTheme } from "@heroui/use-theme";

function App() {
  const { theme } = useTheme();

  return (
    <main
      className={`${theme} min-h-screen text-texth1 bg-background flex flex-col`}
    >
      <ThemeSwitcher />
      <Header />
      <InputSearch />
    </main>
  );
}

export default App;

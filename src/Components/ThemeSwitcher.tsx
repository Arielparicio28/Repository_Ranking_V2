import { useTheme } from "@heroui/use-theme";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isSwitching, setIsSwitching] = useState(false);

  const toggleTheme = () => {
    setIsSwitching(true);
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
      setIsSwitching(false);
    }, 300); // Duración de la animación
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 p-2 md:p-3 rounded-full 
                  ${theme === "light" ? "bg-blue-500 text-white" : "bg-orange-400 text-black"} 
                  hover:shadow-lg transition-all transform 
                  ${isSwitching ? "scale-110" : "scale-100"}
                  sm:p-1 sm:top-3 sm:right-3`}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon
          size={isSwitching ? 20 : 16}
          className="transition-all duration-300 sm:w-4 sm:h-4 md:w-5 md:h-5"
        />
      ) : (
        <Sun
          size={isSwitching ? 20 : 16}
          className="transition-all duration-300 sm:w-4 sm:h-4 md:w-5 md:h-5"
        />
      )}
    </button>
  );
};

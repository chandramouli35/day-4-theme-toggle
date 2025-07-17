import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="flex justify-between items-center mb-6">
      <h1
        className={`text-2xl sm:text-3xl font-bold ${
          theme === "light" ? "text-gray-800" : "text-blue-400"
        }`}
      >
        Theme Toggle App
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </header>
  );
}

export default Header;

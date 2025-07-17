import "./App.css";
import { ThemeProvider } from "./components/ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";

function Main() {
  return (
    <div className="min-h-screen p-4 sm:p-6 transition-colors duration-300">
      <Header />
      <Content />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;

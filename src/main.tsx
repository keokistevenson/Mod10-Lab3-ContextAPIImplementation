import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoProvider>
      <FilterProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FilterProvider>
    </TodoProvider>
  </StrictMode>
);
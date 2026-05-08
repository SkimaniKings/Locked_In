import { toggleDarkMode } from "./store/theme";

function App() {
  return (
<div className="h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)]">
  <button onClick={toggleDarkMode}>
    Toggle Theme
  </button>
</div>
  );
}

export default App;

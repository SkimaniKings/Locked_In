export const toggleDarkMode = () => {
  const root = document.documentElement; // THIS is important

  root.classList.toggle("dark");

  const isDark = root.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  console.log("Dark mode:", isDark); // debug
};
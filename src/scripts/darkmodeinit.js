document.addEventListener("DOMContentLoaded", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const html = document.querySelector("html");

  if (prefersDark.matches) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});

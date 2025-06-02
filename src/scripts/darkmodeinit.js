document.addEventListener("DOMContentLoaded", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const html = document.querySelector("html");
  if (prefersDark.matches) {
    html.classList.add("dark");
    toggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    html.classList.remove("dark");
    toggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
});

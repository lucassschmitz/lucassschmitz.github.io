// Fill in the current year in the footer.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Show or hide paper abstracts, keeping the button state readable by screen readers.
document.querySelectorAll(".abstract-toggle").forEach((button) => {
  const abstract = document.getElementById(button.getAttribute("aria-controls"));
  const label = button.querySelector(".toggle-label");
  if (!abstract || !label) {
    return;
  }

  button.addEventListener("click", () => {
    const expand = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(expand));
    label.textContent = expand ? "hide abstract" : "abstract";
    abstract.hidden = !expand;
  });
});

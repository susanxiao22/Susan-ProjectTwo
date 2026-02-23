// JS scripts placed here
// Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// To-Do Add/Delete
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      ${taskText}
    </label>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Form Validation
document.getElementById("plantForm").addEventListener("submit", function(e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    alert("Please fill out required fields correctly.");
  }
});
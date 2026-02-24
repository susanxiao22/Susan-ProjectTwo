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
      <input type="checkbox" onchange="toggleStrike(this)">
      <span>${taskText}</span>
    </label>
    <button onclick="deleteTask(this)" class="delete-btn">✕</button>
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
// MODAL CONTENT
function openModal(type) {
  const modal = document.getElementById("itemModal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDescription");

  const content = {
    plant: {
      title: "Starter Plant",
      text: "A healthy beginner-friendly plant selected for easy growth and success."
    },
    soil: {
      title: "Premium Soil Mix",
      text: "Nutrient-rich, well-draining soil designed to support strong root development."
    },
    food: {
      title: "Organic Plant Food",
      text: "All-natural fertilizer that boosts plant growth without harmful chemicals."
    },
    guide: {
      title: "Detailed Care Guide",
      text: "Step-by-step instructions to help you care for your plant with confidence."
    },
    reminder: {
      title: "Reminder Schedule",
      text: "A simple watering and maintenance tracker to keep your plant thriving."
    },
    bonus: {
      title: "Surprise Bonus Item",
      text: "A fun seasonal gardening surprise included just for you!"
    }
  };

  title.textContent = content[type].title;
  desc.textContent = content[type].text;

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("itemModal").style.display = "none";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function toggleStrike(checkbox) {
  const text = checkbox.nextElementSibling;
  text.style.textDecoration =
    checkbox.checked ? "line-through" : "none";
}
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
      text: "A healthy beginner-friendly plant selected for easy growth and success. It comes in a simple packet made easy to tear and includes about ten pellets of seed for an abundance of vegetation."
    },
    soil: {
      title: "Premium Soil Mix",
      text: "Nutrient-rich, well-draining soil designed to support strong root development. It is about fifteen pounds of premium, professionally blended soil formulated to give plants the ideal balance of moisture retention and aeration. Perfect for indoor and outdoor container plants, raised beds, or transplanting young seedlings."
    },
    food: {
      title: "Organic Plant Food",
      text: "All-natural fertilizer that boosts plant growth without harmful chemicals. Made from organic, sustainably sourced ingredients, it delivers essential nutrients like nitrogen, phosphorus, and potassium in a slow-release form that feeds plants steadily over time."
    },
    guide: {
      title: "Detailed Care Guide",
      text: "Step-by-step instructions to help you care for your plant with confidence. You will also find practical tips for pruning, repotting, and recognizing early signs of stress or nutrient deficiencies—so you can address small issues before they become bigger problems."
    },
    reminder: {
      title: "Reminder Schedule",
      text: "A simple watering and maintenance tracker to keep your plant thriving, designed to help you stay consistent and organized with your care routine. This easy-to-use system allows you to log watering dates, fertilizing schedules, pruning sessions, and any notable changes in your plant’s appearance."
    },
    bonus: {
      title: "Surprise Bonus Item",
      text: "A fun seasonal gardening surprise included just for you, thoughtfully selected to add a little extra joy to your growing experience. Each surprise is inspired by the time of year, whether it’s a packet of specialty seeds, a limited-edition plant marker, a small gardening accessory, or a bonus gardening tool tailored to the season."
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
  const li = button.parentElement;
  li.classList.add("fade-out");

  setTimeout(() => {
    li.remove();
  }, 300); // matches CSS animation time
}

function toggleStrike(checkbox) {
  const text = checkbox.nextElementSibling;

  if (checkbox.checked) {
    text.classList.add("completed");
  } else {
    text.classList.remove("completed");
  }
}
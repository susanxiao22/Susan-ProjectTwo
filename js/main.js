let lastFocusedElement = null;

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

const form = document.getElementById("plantForm");
const successModal = document.getElementById("successModal");

const missionSection = document.querySelector(".mission-section");

const galleryModal = document.getElementById("itemModal");
const galleryModalTitle = document.getElementById("modalTitle");
const galleryModalDescription = document.getElementById("modalDescription");

const galleryImages = document.querySelectorAll(".gallery-track img");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

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

function toggleStrike(checkbox) {
  const text = checkbox.nextElementSibling;

  if (checkbox.checked) {
    text.classList.add("completed");
  } else {
    text.classList.remove("completed");
  }
}

function deleteTask(button) {
  const li = button.closest("li");
  li.classList.add("fade-out");

  setTimeout(() => {
    li.remove();
  }, 300);
}

function openModal(type) {
  const modal = document.getElementById("itemModal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDescription");

  trapFocus(modal);
  lastFocusedElement = document.activeElement;

  const content = {
    plant: {
      title: "Starter Plant",
      text: "A healthy beginner-friendly plant selected for easy growth and success..."
    },
    soil: {
      title: "Premium Soil Mix",
      text: "Nutrient-rich, well-draining soil designed to support strong root development..."
    },
    food: {
      title: "Organic Plant Food",
      text: "All-natural fertilizer that boosts plant growth without harmful chemicals..."
    },
    guide: {
      title: "Detailed Care Guide",
      text: "Step-by-step instructions to help you care for your plant..."
    },
    reminder: {
      title: "Reminder Schedule",
      text: "A simple watering and maintenance tracker..."
    },
    bonus: {
      title: "Surprise Bonus Item",
      text: "A fun seasonal gardening surprise included just for you..."
    }
  };

  title.textContent = content[type].title;
  desc.textContent = content[type].text;

  modal.style.display = "flex";
  modal.focus();
}

function closeModal() {
  const modal = document.getElementById("itemModal");
  modal.style.display = "none";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function closeSuccessModal() {
  successModal.style.display = "none";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const title = img.getAttribute("data-title");
    const description = img.getAttribute("data-description");

    galleryModalTitle.textContent = title;
    galleryModalDescription.textContent = description;

    galleryModal.style.display = "flex";
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const category = document.getElementById("category").value;

  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com|icloud\.com)$/;

  if (name === "") {
    alert("Please enter your full name.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email (Gmail, Outlook, Yahoo, or iCloud).");
    return;
  }

  if (category === "") {
    alert("Please select a plant package.");
    return;
  }

  successModal.style.display = "flex";
  form.reset();
});

document.querySelectorAll('.box-card, .gallery-track img').forEach(item => {

  if (!item.hasAttribute('tabindex')) {
    item.setAttribute('tabindex', '0');
  }

  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      item.click();
    }
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeSuccessModal();
  }
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      btn.click();
    }
  });
});

window.addEventListener("click", function (e) {
  if (e.target === successModal) {
    successModal.style.display = "none";
  }
});

function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  modal.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      missionSection.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

observer.observe(missionSection);
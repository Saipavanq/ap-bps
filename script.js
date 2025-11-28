const homeSection = document.getElementById("home-section");
const sections = {
  "eligibility-section": document.getElementById("eligibility-section"),
  "penalty-section": document.getElementById("penalty-section"),
};

function showSection(id) {
  homeSection.classList.add("hidden");
  Object.values(sections).forEach(s => s.classList.add("hidden"));
  if (id === "home-section") homeSection.classList.remove("hidden");
  else if (sections[id]) sections[id].classList.remove("hidden");
}

document.querySelectorAll("[data-open-section]").forEach(btn =>
  btn.addEventListener("click", () => {
    showSection(btn.getAttribute("data-open-section"));
  })
);

document.querySelectorAll("[data-back]").forEach(btn =>
  btn.addEventListener("click", () => showSection("home-section"))
);

showSection("home-section");

// Eligibility
const eligibilityForm = document.getElementById("eligibility-form");
const eligibilityResult = document.getElementById("eligibility-result");

eligibilityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  eligibilityResult.textContent =
    "Basic eligibility: Looks possible — need official portal check.";
  eligibilityResult.classList.remove("hidden");
});

// Penalty
const penaltyForm = document.getElementById("penalty-form");
const penaltyResult = document.getElementById("penalty-result");

penaltyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  penaltyResult.textContent =
    "Rough penalty estimate requires more details — contact me.";
  penaltyResult.classList.remove("hidden");
});

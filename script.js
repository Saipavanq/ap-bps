// Screenshot mode elements
const screenshotToggleBtn = document.getElementById("screenshotToggleBtn");
const screenshotBanner = document.getElementById("screenshotBanner");
const exitScreenshotBtn = document.getElementById("exitScreenshotBtn");

// Rules / image elements
const rulesToggleBtn = document.getElementById("rulesToggleBtn");
const rulesSection = document.getElementById("rulesSection");
const rulesImage = document.getElementById("rulesImage");

// Turn ON screenshot mode
if (screenshotToggleBtn && screenshotBanner && exitScreenshotBtn) {
  screenshotToggleBtn.addEventListener("click", () => {
    screenshotBanner.classList.remove("hidden");
    screenshotToggleBtn.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Exit screenshot mode
  exitScreenshotBtn.addEventListener("click", () => {
    screenshotBanner.classList.add("hidden");
    screenshotToggleBtn.classList.remove("hidden");
  });
}

// Show / hide BPS rules image section
if (rulesToggleBtn && rulesSection && rulesImage) {
  rulesToggleBtn.addEventListener("click", () => {
    const isHidden = rulesSection.classList.contains("hidden");
    rulesSection.classList.toggle("hidden");

    // Button text change
    if (isHidden) {
      rulesToggleBtn.textContent = "Hide BPS Rules (Image)";
      // Smooth scroll to the image
      const y = rulesSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      rulesToggleBtn.textContent = "Show BPS Rules (Image)";
    }
  });
}

// ===================== PRELOADER =====================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.classList.add("hidden");
});

// ===================== SCREENSHOT MODE =====================
const screenshotToggleBtn = document.getElementById("screenshotToggleBtn");
const screenshotBanner = document.getElementById("screenshotBanner");
const exitScreenshotBtn = document.getElementById("exitScreenshotBtn");

if (screenshotToggleBtn && screenshotBanner && exitScreenshotBtn) {
  screenshotToggleBtn.addEventListener("click", () => {
    screenshotBanner.classList.remove("hidden");
    screenshotToggleBtn.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  exitScreenshotBtn.addEventListener("click", () => {
    screenshotBanner.classList.add("hidden");
    screenshotToggleBtn.classList.remove("hidden");
  });
}

// ===================== RULES IMAGE TOGGLE =====================
const rulesToggleBtn = document.getElementById("rulesToggleBtn");
const rulesSection = document.getElementById("rulesSection");

if (rulesToggleBtn && rulesSection) {
  rulesToggleBtn.addEventListener("click", () => {
    const isHidden = rulesSection.classList.contains("hidden");
    rulesSection.classList.toggle("hidden");

    if (isHidden) {
      rulesToggleBtn.textContent = "Hide BPS Rules (Image)";
      const y =
        rulesSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      rulesToggleBtn.textContent = "Show BPS Rules (Image)";
    }
  });
}

// ===================== BACK TO TOP BUTTON =====================
const backToTopBtn = document.getElementById("backToTopBtn");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.remove("hidden");
    } else {
      backToTopBtn.classList.add("hidden");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===================== CONTACT FORM (MAILTO) =====================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const messageInput = document.getElementById("contactMessage");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      alert("Please fill all fields before sending.");
      return;
    }

    const subject = `BPS Planner enquiry from ${name}`;
    const body =
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoLink = `mailto:mallampatisaipavan@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    alert("Opening your email app to send the message.");
    window.location.href = mailtoLink;
  });
}

// ===================== LANGUAGE SWITCH (EN / TE) =====================
const langEnBtn = document.getElementById("langEn");
const langTeBtn = document.getElementById("langTe");
const i18nElements = document.querySelectorAll("[data-i18n]");

const translations = {
  en: {
    title: "BPS Planner – Andhra Pradesh",
    subtitle: "Quick helper for building regularisation in Guntur & Vijayawada.",
    heroText:
      "Use this simple planner to quickly check basic BPS-related details for your building projects in Andhra Pradesh.",
    navPlanner: "Planner",
    navRules: "Rules",
    navContact: "Contact",
    btnScreenshot: "Turn on screenshot mode",
    btnRules: "Show BPS Rules (Image)",
    plannerHeading: "Project Details / BPS Check",
    plannerDesc:
      "Fill these basic details to estimate how your building may fall under BPS / regularisation norms.",
    labelMunicipality: "Municipality / Corporation",
    labelPlotSize: "Plot size (sq. yards)",
    labelFloors: "No. of floors",
    labelUsage: "Usage type",
    btnCalculate: "Calculate / Check BPS",
    rulesHeading: "Official BPS Rules – Reference",
    rulesDesc:
      "This image contains key BPS rules / fee details. Zoom in if needed for clarity.",
    contactHeading: "Contact Me",
    contactSubtitle:
      "Feel free to reach out for any BPS related help, doubts or collaboration.",
    formNameLabel: "Your name",
    formEmailLabel: "Your email",
    formMessageLabel: "Message",
    formSubmit: "Send message",
  },
  te: {
    title: "బీపీఎస్ ప్లానర్ – ఆంధ్ర ప్రదేశ్",
    subtitle:
      "గుంటూరు & విజయవాడ ప్రాంతాల కోసం త్వరిత బిల్డింగ్ రెగ్యులరైజేషన్ సహాయం.",
    heroText:
      "మీ బిల్డింగ్ ప్రాజెక్ట్ బీపీఎస్ పరిధిలోకి ఎలా వస్తుంది అనే బేసిక్ ఐడియా కోసం ఈ ప్లానర్‌ని వాడండి.",
    navPlanner: "ప్లానర్",
    navRules: "రూల్స్",
    navContact: "కాంటాక్ట్",
    btnScreenshot: "స్క్రీన్‌షాట్ మోడ్ ఆన్ చేయి",
    btnRules: "బీపీఎస్ రూల్స్ (ఇమేజ్) చూపు",
    plannerHeading: "ప్రాజెక్ట్ వివరాలు / బీపీఎస్ చెక్",
    plannerDesc:
      "మీ బిల్డింగ్ బీపీఎస్ / రెగ్యులరైజేషన్ నిబంధనల్లో ఎలా వస్తుందో అంచనా కోసం ఈ వివరాలు నమోదు చేయండి.",
    labelMunicipality: "మున్సిపాలిటీ / కార్పొరేషన్",
    labelPlotSize: "ప్లాట్ సైజు (చ. గజాలు)",
    labelFloors: "అంతస్తుల సంఖ్య",
    labelUsage: "వినియోగం (Usage type)",
    btnCalculate: "బీపీఎస్ చెక్ చేయి",
    rulesHeading: "అధికారిక బీపీఎస్ రూల్స్ – రిఫరెన్స్",
    rulesDesc:
      "ఈ ఇమేజ్‌లో ముఖ్య బీపీఎఎస్ రూల్స్ / ఫీజు వివరాలు ఉంటాయి. అవసరమైతే జూమ్ చేసి చూడండి.",
    contactHeading: "నన్ను సంప్రదించండి",
    contactSubtitle:
      "బీపీఎస్, డౌట్స్ లేదా కలబరేషన్ కోసం ఎప్పుడైనా మెసేజ్ చేయండి.",
    formNameLabel: "మీ పేరు",
    formEmailLabel: "మీ ఇమెయిల్",
    formMessageLabel: "మెసేజ్",
    formSubmit: "మెసేజ్ పంపు",
  },
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  if (langEnBtn && langTeBtn) {
    if (lang === "en") {
      langEnBtn.classList.add("border-slate-300", "bg-white", "font-semibold");
      langEnBtn.classList.remove("text-slate-600");

      langTeBtn.classList.remove("border-slate-300", "bg-white", "font-semibold");
      langTeBtn.classList.add("text-slate-600");
    } else {
      langTeBtn.classList.add("border-slate-300", "bg-white", "font-semibold");
      langTeBtn.classList.remove("text-slate-600");

      langEnBtn.classList.remove("border-slate-300", "bg-white", "font-semibold");
      langEnBtn.classList.add("text-slate-600");
    }
  }
}

// Default language = EN
setLanguage("en");

if (langEnBtn) {
  langEnBtn.addEventListener("click", () => setLanguage("en"));
}
if (langTeBtn) {
  langTeBtn.addEventListener("click", () => setLanguage("te"));
}

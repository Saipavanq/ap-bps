// ===================== PRELOADER =====================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.classList.add("hidden");
});

// ===================== THEME TOGGLE (LIGHT / DARK) =====================
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeToggleIcon = document.getElementById("themeToggleIcon");
const root = document.documentElement;

function applyStoredTheme() {
  const stored = localStorage.getItem("bps-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = stored === "dark" || (!stored && prefersDark);

  if (useDark) {
    root.classList.add("dark");
    if (themeToggleIcon) {
      themeToggleIcon.classList.remove("fa-moon");
      themeToggleIcon.classList.add("fa-sun");
    }
  } else {
    root.classList.remove("dark");
    if (themeToggleIcon) {
      themeToggleIcon.classList.remove("fa-sun");
      themeToggleIcon.classList.add("fa-moon");
    }
  }
}

applyStoredTheme();

if (themeToggleBtn && themeToggleIcon) {
  themeToggleBtn.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("bps-theme", isDark ? "dark" : "light");
    if (isDark) {
      themeToggleIcon.classList.remove("fa-moon");
      themeToggleIcon.classList.add("fa-sun");
    } else {
      themeToggleIcon.classList.remove("fa-sun");
      themeToggleIcon.classList.add("fa-moon");
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

let currentLanguage = "en";

const translations = {
  en: {
    title: "BPS Planner – Andhra Pradesh",
    subtitle:
      "Helper for Building Penalisation Scheme checks (inspired by DTCP calculator).",
    heroText:
      "Building Penalisation Scheme helper for quick estimation and documentation reference. This is not an official government calculator.",
    navPlanner: "Planner",
    navRules: "Rules",
    navContact: "Contact",
    plannerHeading: "Project Details / BPS Check",
    plannerDesc:
      "Fill these basic details to estimate how your building may fall under BPS / regularisation norms.",
    labelMunicipality: "Municipality / Corporation",
    labelPlotSize: "Net Plot area (sq. yards)",
    labelFloors: "No. of floors",
    labelUsage: "Building usage type",
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
      "బిల్డింగ్ పెనలైజేషన్ స్కీమ్ త్వరిత లెక్కలు కోసం హెల్పర్ (DTCP కాల్కులేటర్ స్టైల్).",
    heroText:
      "బిల్డింగ్ పెనలైజేషన్ స్కీమ్ కోసం రఫ్ ఎస్టిమేట్, డాక్యుమెంట్ రిఫరెన్స్ కొరకు మాత్రమే. ఇది అధికారిక గవర్నమెంట్ కాల్కులేటర్ కాదు.",
    navPlanner: "ప్లానర్",
    navRules: "రూల్స్",
    navContact: "కాంటాక్ట్",
    plannerHeading: "ప్రాజెక్ట్ వివరాలు / బీపీఎస్ చెక్",
    plannerDesc:
      "మీ బిల్డింగ్ బీపీఎస్ / రెగ్యులరైజేషన్ నిబంధనల్లో ఎలా వస్తుందో అంచనా కోసం కింది వివరాలు ఇవ్వండి.",
    labelMunicipality: "మున్సిపాలిటీ / కార్పొరేషన్",
    labelPlotSize: "నెట్ ప్లాట్ ఏరియా (చ. గజాలు)",
    labelFloors: "అంతస్తుల సంఖ్య",
    labelUsage: "బిల్డింగ్ వినియోగం",
    btnCalculate: "బీపీఎస్ లెక్కించు",
    rulesHeading: "అధికారిక బీపీఎస్ రూల్స్ – రిఫరెన్స్",
    rulesDesc:
      "ఈ ఇమేజ్‌లో ముఖ్య బీపీఎస్ రూల్స్ / ఫీజు వివరాలు ఉంటాయి. అవసరమైతే జూమ్ చేసి చూడండి.",
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
  currentLanguage = lang;

  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  if (langEnBtn && langTeBtn) {
    if (lang === "en") {
      langEnBtn.classList.add("bg-white", "text-emerald-700", "font-semibold");
      langTeBtn.classList.remove("bg-white", "text-emerald-700", "font-semibold");
      langTeBtn.classList.add("text-emerald-100");
    } else {
      langTeBtn.classList.add("bg-white", "text-emerald-700", "font-semibold");
      langEnBtn.classList.remove("bg-white", "text-emerald-700", "font-semibold");
      langEnBtn.classList.add("text-emerald-100");
    }
  }
}

// default
setLanguage("en");

if (langEnBtn) {
  langEnBtn.addEventListener("click", () => setLanguage("en"));
}
if (langTeBtn) {
  langTeBtn.addEventListener("click", () => setLanguage("te"));
}

// ===================== BPS CALCULATOR =====================
const municipalitySelect = document.getElementById("municipalitySelect");
const plotSizeInput = document.getElementById("plotSizeInput");
const marketValueInput = document.getElementById("marketValueInput");
const floorsInput = document.getElementById("floorsInput");
const usageSelect = document.getElementById("usageSelect");
const penaltyPercentInput = document.getElementById("penaltyPercentInput");
const calculateBtn = document.getElementById("calculateBtn");
const bpsResult = document.getElementById("bpsResult");
const bpsResultTitle = document.getElementById("bpsResultTitle");
const bpsResultDetail = document.getElementById("bpsResultDetail");

const resultMessages = {
  en: {
    errorTitle: "Please fill all required details.",
    errorDetail:
      "Select municipality, enter plot size, market value, floors and usage type, then try again.",
    lowTitle: "Low risk – likely easier for BPS / regularisation.",
    lowDetail:
      "For a {plot} sq. yard {usage} building with {floors} floor(s) in {municipality}, the estimated BPS-related charges are around ₹{fee}. This looks like a relatively simple case, subject to official rules.",
    mediumTitle: "Medium risk – some deviations possible.",
    mediumDetail:
      "For a {plot} sq. yard {usage} building with {floors} floor(s) in {municipality}, the estimated BPS-related charges are around ₹{fee}. Please cross-check official rules and consult an engineer / architect.",
    highTitle: "High risk – please check rules carefully.",
    highDetail:
      "For a {plot} sq. yard {usage} building with {floors} floor(s) in {municipality}, the estimated BPS-related charges may be ₹{fee} or more. Treat this only as a helper and rely on official BPS notifications.",
  },
  te: {
    errorTitle: "అన్నీ వివరాలు పూర్తి చేయండి.",
    errorDetail:
      "మున్సిపాలిటీ, ప్లాట్ సైజు, మార్కెట్ వెల్యూ, అంతస్తులు, యూజ్ టైప్ ఇచ్చి మళ్లీ ప్రయత్నించండి.",
    lowTitle: "లో రిస్క్ – బీపీఎస్ / రెగ్యులరైజేషన్ సులభంగా ఉండే అవకాశం.",
    lowDetail:
      "{municipality}లో {plot} చ.గజాల {usage} బిల్డింగ్ ({floors} అంతస్తులు) కోసం అంచనా బీపీఎస్ చార్జీలు సుమారుగా ₹{fee}. ఇది సింపుల్ కేస్‌లా కనిపిస్తోంది (ఫైనల్ గానే అధికారిక రూల్స్ చూడాలి).",
    mediumTitle: "మీడియం రిస్క్ – కొంత డివియేషన్ ఉండే అవకాశం.",
    mediumDetail:
      "{municipality}లో {plot} చ.గజాల {usage} బిల్డింగ్ ({floors} అంతస్తులు) కోసం అంచనా బీపీఎస్ చార్జీలు సుమారుగా ₹{fee}. తప్పనిసరిగా అధికారిక నోటిఫికేషన్లు మరియు ఇంజనీర్ / ఆర్కిటెక్ట్ సలహా తీసుకోండి.",
    highTitle: "హై రిస్క్ – బీపీఎస్ రూల్స్ జాగ్రత్తగా చెక్ చేయాలి.",
    highDetail:
      "{municipality}లో {plot} చ.గజాల {usage} బిల్డింగ్ ({floors} అంతస్తులు) కోసం బీపీఎస్ చార్జీలు ₹{fee} లేదా అంతకంటే ఎక్కువ కావచ్చు. ఇది కేవలం రఫ్ ఎస్టిమేట్ మాత్రమే, ఫైనల్ సమాచారం కోసం ప్రభుత్వ బీపీఎస్ కాల్కులేటర్‌ను మాత్రమే ఉపయోగించండి.",
  },
};

if (
  municipalitySelect &&
  plotSizeInput &&
  marketValueInput &&
  floorsInput &&
  usageSelect &&
  penaltyPercentInput &&
  calculateBtn &&
  bpsResult &&
  bpsResultTitle &&
  bpsResultDetail
) {
  calculateBtn.addEventListener("click", () => {
    const municipality = municipalitySelect.value;
    const plotSize = parseFloat(plotSizeInput.value);
    const marketValue = parseFloat(marketValueInput.value);
    const floors = parseInt(floorsInput.value, 10);
    const usage = usageSelect.value;
    let penaltyPercent = parseFloat(penaltyPercentInput.value);

    if (
      !municipality ||
      !plotSize ||
      plotSize <= 0 ||
      !marketValue ||
      marketValue <= 0 ||
      !floors ||
      floors <= 0
    ) {
      const msgSet = resultMessages[currentLanguage] || resultMessages.en;
      bpsResultTitle.textContent = msgSet.errorTitle;
      bpsResultDetail.textContent = msgSet.errorDetail;
      bpsResult.classList.remove("hidden");
      return;
    }

    // default penalty percent if not given
    if (!penaltyPercent || penaltyPercent <= 0) {
      penaltyPercent = 20;
    }

    // ---- estimation model (inspired by govt fields, not official) ----
    const totalMarketValue = plotSize * marketValue; // ₹
    const basePenalty = (totalMarketValue * penaltyPercent) / 100;

    // adjust using usage and floors
    let usageFactor = 1;
    if (usage === "Commercial") usageFactor = 1.3;
    else if (usage === "Mixed") usageFactor = 1.15;

    const floorsFactor = 1 + 0.12 * (floors - 1);

    const rawFee = basePenalty * usageFactor * floorsFactor;
    const estimatedFee = Math.max(0, Math.round(rawFee));

    // risk level
    let level;
    if (floors <= 2 && plotSize <= 200) level = "low";
    else if (floors <= 4 && plotSize <= 400) level = "medium";
    else level = "high";

    const msgSet = resultMessages[currentLanguage] || resultMessages.en;
    let titleText = "";
    let detailTemplate = "";

    if (level === "low") {
      titleText = msgSet.lowTitle;
      detailTemplate = msgSet.lowDetail;
    } else if (level === "medium") {
      titleText = msgSet.mediumTitle;
      detailTemplate = msgSet.mediumDetail;
    } else {
      titleText = msgSet.highTitle;
      detailTemplate = msgSet.highDetail;
    }

    const feeFormatted = estimatedFee.toLocaleString("en-IN");

    const detailText = detailTemplate
      .replace("{municipality}", municipality)
      .replace("{usage}", usage)
      .replace("{plot}", plotSize)
      .replace("{floors}", floors)
      .replace("{fee}", feeFormatted);

    bpsResultTitle.textContent = titleText;
    bpsResultDetail.textContent = detailText;
    bpsResult.classList.remove("hidden");
  });
}

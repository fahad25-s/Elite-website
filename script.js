/* ═══════════════════════════════════════════════════════════════
   ELITE DIAGNOSTIC CENTER & PHYSIOTHERAPY — script.js
   -------------------------------------------------------
   ✅ নতুন ডাক্তার যোগ করতে: DOCTORS array-এ নতুন object যোগ করুন
   ✅ ডাক্তারের তথ্য পরিবর্তন করতে: সেই object-এর value পরিবর্তন করুন
   ✅ নতুন service যোগ করতে: SERVICES array-এ নতুন object যোগ করুন
   ✅ নতুন diagnostic test যোগ করতে: DIAGNOSTIC_TESTS array-এ যোগ করুন
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   DATA: DOCTORS
   photo: images/ ফোল্ডারে ছবির filename দিন।
          ছবি না থাকলে "" রাখুন — placeholder দেখাবে।
   callNumber: ডাক্তারের নিজস্ব নম্বর থাকলে দিন,
               না হলে প্রতিষ্ঠানের নম্বর রাখুন।
───────────────────────────────────────────── */
const DOCTORS = [
  {
    id: 1,
    name: "ডাঃ সারওয়ার আহমদ জয়",
    degree: "এমবিবিএস (এস.ইউ.এস.টি)\nডিওসি (চর্ম, যৌন ও এলার্জি)\nসিএমইউ (আল্ট্রাসনোগ্রাফি)",
    specialty: "মেডিসিন, ডায়াবেটিস, প্রেশার, শ্বাসকষ্ট, বাত-ব্যথা, শিশু, চর্ম, যৌন ও এলার্জি রোগে অভিজ্ঞ",
    experience: "মেডিকেল অফিসার (এক্স), আল হারামাইন হাসপাতাল, সিলেট",
    bmdc: "এ-১১৯০৫৯",
    photo: "images/doctor-sarwar.jpg",      // ← এই নামে images/ ফোল্ডারে ছবি রাখুন
    days: "শনিবার – বৃহস্পতিবার",
    time: "সকাল ১১টা – দুপুর ৩টা এবং বিকাল ৫টা – রাত ৮টা",
    fee: "৪০০ টাকা",
    chamber: "মার্ভেলাস টাওয়ার, ঢাকাদক্ষিণ রোড, গোলাপগঞ্জ, সিলেট",
    callNumber: "01337273083"
  },
  {
    id: 2,
    name: "ডাঃ উমাইজা বিনতে অশোক",
    degree: "এমবিবিএস\nএফসিপিএস (অব্স গাইনী, পার্ট-২)\nডি.জি.ও (অন কোর্স)",
    specialty: "প্রসূতি ও স্ত্রী রোগে অভিজ্ঞ",
    experience: "জেনারেল ফিজিশিয়ান এন্ড ডক্টর অব অব্স এন্ড গাইনী, সিলেট এম.এ.জি. ওসমানী মেডিকেল কলেজ হাসপাতাল",
    bmdc: "",
    photo: "images/doctor-umaiza.jpg",     // ← এই নামে images/ ফোল্ডারে ছবি রাখুন
    days: "প্রতি মঙ্গলবার",
    time: "বিকাল ৫টা – রাত ৮টা",
    fee: "৫০০ টাকা",
    chamber: "মার্ভেলাস টাওয়ার, ঢাকাদক্ষিণ রোড, গোলাপগঞ্জ, সিলেট",
    callNumber: "01337273083"
  },
  {
    id: 3,
    name: "ডাঃ জুয়েল আহমেদ",
    degree: "এমবিবিএস\nপিজিটি (অর্থো)",
    specialty: "হাড় জোড়া, বাত-ব্যথা, কোমর ব্যথা, ঘাড় ব্যথা, মেরুদণ্ড ও আঘাতজনিত রোগে অভিজ্ঞ",
    experience: "সিনিয়র মেডিকেল অফিসার, আল হারামাইন হাসপাতাল, সিলেট",
    bmdc: "এ-১১৯৫৬৭",
    photo: "images/doctor-juwel.jpg",      // ← এই নামে images/ ফোল্ডারে ছবি রাখুন
    days: "রবিবার ও বৃহস্পতিবার",
    time: "বিকাল ৪টা – সন্ধ্যা ৬টা",
    fee: "৫০০ টাকা",
    chamber: "মার্ভেলাস টাওয়ার, ঢাকাদক্ষিণ রোড, গোলাপগঞ্জ, সিলেট",
    callNumber: "01337273083"
  },
  {
    id: 4,
    name: "ডাঃ আমিনা খাতুন",
    degree: "এমবিবিএস\nসিসিডি (বারডেম)\nডিএমইউ (আল্ট্রাসনোগ্রাফি)",
    specialty: "মেডিসিন, ডায়াবেটিস, শিশু ও মহিলা রোগে অভিজ্ঞ",
    experience: "সোনোলজিস্ট এবং জেনারেল প্র্যাকটিশনার, এক্স-মেডিকেল অফিসার, ওয়েসিস হাসপাতাল, সিলেট",
    bmdc: "",
    photo: "images/doctor-amina.jpg",      // ← এই নামে images/ ফোল্ডারে ছবি রাখুন
    days: "শনিবার – বৃহস্পতিবার",
    time: "বিকাল ৩টা – সন্ধ্যা ৬টা",
    fee: "৫০০ টাকা",
    chamber: "মার্ভেলাস টাওয়ার, ঢাকাদক্ষিণ রোড, গোলাপগঞ্জ, সিলেট",
    callNumber: "01337273083"
  },
  {
    id: 5,
    name: "ডাঃ সাদিয়া জান্নাত",
    degree: "এমবিবিএস (এসইউএসটি)\nসিসিডি (বারডেম)",
    specialty: "মেডিসিন, গাইনি ও স্ত্রী রোগে অভিজ্ঞ",
    experience: "এক্স-মেডিকেল অফিসার, আল হারামাইন হাসপাতাল, সিলেট",
    bmdc: "",
    photo: "images/doctor-sadia.jpg",      // ← এই নামে images/ ফোল্ডারে ছবি রাখুন
    days: "সোম, মঙ্গল ও বুধবার",
    time: "বিকাল ৪টা – রাত ৮টা",
    fee: "৫০০ টাকা",
    chamber: "মার্ভেলাস টাওয়ার, ঢাকাদক্ষিণ রোড, গোলাপগঞ্জ, সিলেট",
    callNumber: "01337273083"
  },
  {
    id: 6,
    name: "ডাঃ নৌওশীন ইসলাম চৌধুরী",
    degree: "এম.বি.বি.এস (শাবিপ্রবি)\nডিএ (এনেস্থেশিওলজী, ইন কোর্স)",
    specialty: "প্রসূতি ও স্ত্রী রোগে অভিজ্ঞ",
    experience: "সিলেট এম.এ.জি. ওসমানী মেডিকেল কলেজ হাসপাতাল",
    bmdc: "এ-৮৩৮০৬",
    photo: "images/doctor-nowshin.jpg",    // ← এই নামে images/ ফোল্ডারে ছবি রাখুন
    days: "প্রতি শুক্রবার",
    time: "বিকাল ৪টা – সন্ধ্যা ৭:৩০",
    fee: "৫০০ টাকা",
    chamber: "মার্ভেলাস টাওয়ার, ঢাকাদক্ষিণ রোড, গোলাপগঞ্জ, সিলেট",
    callNumber: "01337273083"
  },
  {
    id: 7,
    name: "ডাঃ ইসতেহাদ আবু জাফর চৌঃ",
    degree: "এম.বি.বি.এস\nএফ.সি.পি.এস (মেডিসিন)\nবি.সি.এস (স্বাস্থ্য)",
    specialty: "মেডিসিন বিশেষজ্ঞ",
    experience: "সহকারী অধ্যাপক, মেডিসিন বিভাগ, সিলেট এম.এ.জি. ওসমানী মেডিকেল কলেজ হাসপাতাল",
    bmdc: "এ-৬৩৯৫৪",
    photo: "images/doctor-istehaad.jpg",   // ← এই নামে images/ ফোল্ডারে ছবি রাখুন
    days: "প্রতি শুক্রবার",
    time: "বিকাল ৪টা – রাত ৮টা",
    fee: "৫০০ টাকা",
    chamber: "মার্ভেলাস টাওয়ার, ঢাকাদক্ষিণ রোড, গোলাপগঞ্জ, সিলেট",
    callNumber: "01337273083"
  }
];

/* ─────────────────────────────────────────────
   DATA: SERVICES
   icon: নিচে ICONS object থেকে key বেছে নিন
         অথবা নতুন SVG icon যোগ করুন
───────────────────────────────────────────── */
const SERVICES = [
  { name: "ডাক্তার কনসালটেশন",      icon: "stethoscope"  },
  { name: "ডায়াগনস্টিক পরীক্ষা",   icon: "lab"          },
  { name: "চর্ম ও অ্যালার্জি চিকিৎসা", icon: "skin"      },
  { name: "মেডিসিন চিকিৎসা",         icon: "medicine"    },
  { name: "গাইনি ও প্রসূতি চিকিৎসা", icon: "gynae"       },
  { name: "ফিজিওথেরাপি",              icon: "physio"      },
  { name: "আল্ট্রাসনোগ্রাফি",       icon: "ultrasound"  }
];

/* ─────────────────────────────────────────────
   DATA: DIAGNOSTIC TESTS
   নতুন test যোগ করতে: array-এ string হিসেবে যোগ করুন
───────────────────────────────────────────── */
const DIAGNOSTIC_TESTS = [
  "CBC", "ESR", "Blood Sugar", "HbA1c", "Lipid Profile",
  "LFT", "KFT", "Thyroid Profile", "Electrolytes", "Creatinine",
  "Urea", "SGPT / SGOT", "Bilirubin", "Uric Acid",
  "Dengue Test", "Malaria Test", "Chikungunya Test"
];

/* ─────────────────────────────────────────────
   SVG ICONS for services
───────────────────────────────────────────── */
const ICONS = {
  stethoscope: `<svg class="service-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 6v12a8 8 0 008 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M8 6v12a12 12 0 0012 12v0a12 12 0 0012-12v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="32" cy="14" r="4" stroke="currentColor" stroke-width="2"/>
    <circle cx="8" cy="6" r="2" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="6" r="2" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  lab: `<svg class="service-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 6v14l-7 12h22L24 20V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 6h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="22" cy="26" r="2" fill="currentColor" opacity=".5"/>
  </svg>`,

  skin: `<svg class="service-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20 8C13.37 8 8 13.37 8 20s5.37 12 12 12 12-5.37 12-12S26.63 8 20 8z" stroke="currentColor" stroke-width="2"/>
    <path d="M15 20c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" stroke="currentColor" stroke-width="2"/>
  </svg>`,

  medicine: `<svg class="service-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="16" width="24" height="16" rx="4" stroke="currentColor" stroke-width="2"/>
    <path d="M14 16V12a6 6 0 1112 0v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M20 22v4M18 24h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  gynae: `<svg class="service-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="20" cy="14" r="6" stroke="currentColor" stroke-width="2"/>
    <path d="M20 20v6M17 26h6M14 32c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  physio: `<svg class="service-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="20" cy="9" r="3" stroke="currentColor" stroke-width="2"/>
    <path d="M20 12v10M14 16l6 2 6-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 28l4-6 4 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 20c3 0 6-2 12-2s9 2 12 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
  </svg>`,

  ultrasound: `<svg class="service-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="10" width="14" height="20" rx="3" stroke="currentColor" stroke-width="2"/>
    <path d="M22 16c3 1.5 5 4 5 7s-2 5.5-5 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M25 13c4 2 7 5.5 7 10s-3 8-7 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>
  </svg>`,

  default: `<svg class="service-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="2"/>
    <path d="M20 14v6l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`
};

/* ════════════════════════════════════════════════
   RENDER: SERVICES
════════════════════════════════════════════════ */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card">
      ${ICONS[s.icon] || ICONS.default}
      <p class="service-name">${s.name}</p>
    </div>
  `).join("");
}

/* ════════════════════════════════════════════════
   RENDER: DIAGNOSTIC TESTS
════════════════════════════════════════════════ */
function renderTests() {
  const list = document.getElementById("testList");
  if (!list) return;
  list.innerHTML = DIAGNOSTIC_TESTS.map(t => `<li>${t}</li>`).join("");
}

/* ════════════════════════════════════════════════
   RENDER: DOCTOR CARDS (carousel)
════════════════════════════════════════════════ */
function placeholderHTML() {
  return '<div class="doctor-card-photo-placeholder">'
    + '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<circle cx="16" cy="16" r="15" stroke="currentColor" stroke-width="1.5"/>'
    + '<path d="M16 9v14M9 16h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
    + '</svg>'
    + '<span>ছবি আসছে</span>'
    + '</div>';
}

function buildCard(doc, index) {
  const photoSection = doc.photo
    ? '<img src="' + doc.photo + '" alt="' + doc.name + '" class="doctor-card-photo" data-fallback="' + index + '" />'
    : placeholderHTML();

  const degreeHTML = doc.degree ? doc.degree.replace(/\n/g, '<br>') : '';
  const specialtyHTML = doc.specialty
    ? '<p class="doctor-card-specialty">' + doc.specialty + '</p>'
    : '';

  return '<div class="doctor-card" data-index="' + index + '" role="button" tabindex="0" aria-label="' + doc.name + ' — বিস্তারিত দেখুন">'
    + photoSection
    + '<div class="doctor-card-body">'
    + '<p class="doctor-card-name">' + doc.name + '</p>'
    + (degreeHTML ? '<p class="doctor-card-degree">' + degreeHTML + '</p>' : '')
    + specialtyHTML
    + '<span class="doctor-card-cta">বিস্তারিত দেখুন →</span>'
    + '</div>'
    + '</div>';
}

function renderDoctorCards() {
  const track = document.getElementById("carouselTrack");
  if (!track) return;

  track.innerHTML = DOCTORS.map((doc, i) => buildCard(doc, i)).join("");

  // Fix broken images after render (no nested backtick problem)
  track.querySelectorAll("img.doctor-card-photo[data-fallback]").forEach(img => {
    img.addEventListener("error", function() {
      const idx = this.getAttribute("data-fallback");
      // Replace only the img with placeholder, keep card-body intact
      this.outerHTML = placeholderHTML();
    }, { once: true });
  });

  // Attach click + keyboard
  track.querySelectorAll(".doctor-card").forEach(card => {
    card.addEventListener("click",  () => openDetail(+card.dataset.index));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") openDetail(+card.dataset.index);
    });
  });

  renderDots();
}

/* ════════════════════════════════════════════════
   CAROUSEL LOGIC
════════════════════════════════════════════════ */
let currentSlide = 0;

function getVisibleCount() {
  const w = window.innerWidth;
  if (w >= 900) return 3;
  if (w >= 640) return 2;
  return 1;
}

function getCardWidth() {
  const track = document.getElementById("carouselTrack");
  if (!track) return 0;
  const card = track.querySelector(".doctor-card");
  if (!card) return 0;
  const gap = 16;
  return card.offsetWidth + gap;
}

function maxSlide() {
  return Math.max(0, DOCTORS.length - getVisibleCount());
}

function goToSlide(index) {
  currentSlide = Math.max(0, Math.min(index, maxSlide()));
  const track = document.getElementById("carouselTrack");
  if (track) track.style.transform = `translateX(-${currentSlide * getCardWidth()}px)`;
  updateButtons();
  updateDots();
}

function updateButtons() {
  const prev = document.getElementById("carouselPrev");
  const next = document.getElementById("carouselNext");
  if (prev) prev.disabled = currentSlide === 0;
  if (next) next.disabled = currentSlide >= maxSlide();
}

function renderDots() {
  const dots = document.getElementById("carouselDots");
  if (!dots) return;
  const count = maxSlide() + 1;
  dots.innerHTML = Array.from({ length: count }, (_, i) =>
    `<button class="carousel-dot${i === 0 ? " active" : ""}"
             aria-label="স্লাইড ${i + 1}" data-dot="${i}"></button>`
  ).join("");
  dots.querySelectorAll(".carousel-dot").forEach(dot => {
    dot.addEventListener("click", () => goToSlide(+dot.dataset.dot));
  });
}

function updateDots() {
  document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

/* Touch / swipe */
(function setupSwipe() {
  let startX = 0, isDragging = false;
  const getTrack = () => document.getElementById("carouselTrack");
  document.addEventListener("mousedown",  e => { if (getTrack()?.contains(e.target)) { startX = e.clientX; isDragging = true; } });
  document.addEventListener("mousemove",  e => { if (!isDragging) return; e.preventDefault(); });
  document.addEventListener("mouseup",    e => { if (!isDragging) return; isDragging = false; handleDrag(startX - e.clientX); });
  document.addEventListener("touchstart", e => { if (getTrack()?.contains(e.target)) startX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend",   e => { if (getTrack()?.contains(e.changedTouches[0].target ?? e.target)) handleDrag(startX - e.changedTouches[0].clientX); });

  function handleDrag(diff) {
    if (Math.abs(diff) > 40) goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
  }
})();

/* ════════════════════════════════════════════════
   DOCTOR DETAIL VIEW
════════════════════════════════════════════════ */
function openDetail(index) {
  const doc = DOCTORS[index];
  if (!doc) return;

  // Photo
  const photoWrap = document.querySelector(".detail-photo-wrap");
  if (doc.photo) {
    const img = document.createElement("img");
    img.id = "detailPhoto";
    img.src = doc.photo;
    img.alt = doc.name;
    img.className = "detail-photo";
    img.addEventListener("error", function() {
      photoWrap.innerHTML = '<div class="detail-photo-placeholder">' + placeholderHTML() + '</div>';
    }, { once: true });
    photoWrap.innerHTML = "";
    photoWrap.appendChild(img);
  } else {
    photoWrap.innerHTML = '<div class="detail-photo-placeholder">' + placeholderHTML() + '</div>';
  }

  setText("detailName",     doc.name);
  setText("detailDegree",   doc.degree.replace(/\n/g, "<br>"), true);
  setText("detailSpecialty", doc.specialty || "—");

  setRow("detailExperienceRow", "detailExperience", doc.experience);
  setRow("detailBmdcRow",       "detailBmdc",       doc.bmdc ? "বিএমডিসি রেজিঃ নং: " + doc.bmdc : "");
  setRow("detailDaysRow",       "detailDays",       doc.days);
  setRow("detailTimeRow",       "detailTime",       doc.time);
  setRow("detailFeeRow",        "detailFee",        doc.fee);
  setRow("detailChamberRow",    "detailChamber",    doc.chamber);

  const callBtn = document.getElementById("detailCallBtn");
  if (callBtn) callBtn.href = `tel:${doc.callNumber || "01337273083"}`;

  // Switch views
  document.getElementById("doctor-list-view").classList.add("hidden");
  const detailView = document.getElementById("doctor-detail-view");
  detailView.classList.remove("hidden");
  detailView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setText(id, value, isHTML = false) {
  const el = document.getElementById(id);
  if (!el) return;
  if (isHTML) el.innerHTML = value;
  else el.textContent = value;
}

function setRow(rowId, valueId, value) {
  const row = document.getElementById(rowId);
  if (!row) return;
  if (!value) {
    row.classList.add("hidden");
    return;
  }
  row.classList.remove("hidden");
  setText(valueId, value);
}

function closeDetail() {
  document.getElementById("doctor-detail-view").classList.add("hidden");
  document.getElementById("doctor-list-view").classList.remove("hidden");
  document.getElementById("doctors").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderTests();
  renderDoctorCards();
  goToSlide(0);

  // Carousel navigation buttons
  document.getElementById("carouselPrev")?.addEventListener("click", () => goToSlide(currentSlide - 1));
  document.getElementById("carouselNext")?.addEventListener("click", () => goToSlide(currentSlide + 1));

  // Back button
  document.getElementById("backBtn")?.addEventListener("click", closeDetail);

  // Recalculate on resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      renderDots();
      goToSlide(Math.min(currentSlide, maxSlide()));
    }, 200);
  });
});

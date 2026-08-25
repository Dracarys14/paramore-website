const page = document.getElementById("page");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const toast = document.getElementById("toast");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

const albums = [
  {
    title: "ALL WE KNOW IS FALLING", tracks: 10, year: 2005,
    image: "assets/all-we-know-is-falling.png",
    description: "Paramore's debut album and the beginning of the band's story.",
    songs: ["All We Know", "Pressure", "Emergency", "Brighter", "Here We Go Again"]
  },
  {
    title: "RIOT!", tracks: 11, year: 2007,
    image: "assets/riot.png",
    description: "A breakthrough record packed with explosive hooks and unforgettable energy.",
    songs: ["For a Pessimist, I'm Pretty Optimistic", "That's What You Get", "Misery Business", "Crushcrushcrush", "Fences"]
  },
  {
    title: "BRAND NEW EYES", tracks: 11, year: 2009,
    image: "assets/brand-new-eyes.png",
    description: "A sharper, more mature Paramore sound with some of the band's most beloved songs.",
    songs: ["Careful", "Ignorance", "Playing God", "Brick by Boring Brick", "The Only Exception"]
  },
  {
    title: "PARAMORE", tracks: 17, year: 2013,
    image: "assets/paramore.png",
    description: "A self-titled era that expanded Paramore's palette and became a defining chapter.",
    songs: ["Fast in My Car", "Now", "Ain't It Fun", "Still Into You", "Last Hope"]
  },
  {
    title: "THIS IS WHY", tracks: 10, year: 2023,
    image: "assets/this-is-why.png",
    description: "A groove-driven, reflective record exploring a new side of the band's sound.",
    songs: ["This Is Why", "The News", "C'est Comme Ça", "Running Out of Time", "Figure 8"]
  }
];

const events = [
  { city: "MANILA", date: "OCT 18", time: "7:00 PM", image: "assets/event-manila-final.jpg", venue: "Manila Arena" },
  { city: "JAPAN", date: "NOV 07", time: "7:00 PM", image: "assets/event-japan-final.jpg", venue: "Tokyo Dome" },
  { city: "GERMANY", date: "DEC 02", time: "7:00 PM", image: "assets/event-germany-final.jpg", venue: "Berlin Arena" }
];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function openModal(html) {
  modalContent.innerHTML = html;
  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
}
function closeModal() {
  modalBackdrop.classList.remove("open");
  modalBackdrop.setAttribute("aria-hidden", "true");
}
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", e => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function setActive(route) {
  document.querySelectorAll(".nav a").forEach(a =>
    a.classList.toggle("active", a.dataset.route === route)
  );
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function renderHome() {
  page.className = "page home-page";
  page.innerHTML = `
    <section class="home-hero">
      <div class="home-copy">
        <div class="home-eyebrow">THE PARAMORE EXPERIENCE</div>
        <h1 class="home-title display">PARAMORE</h1>
        <h2 class="home-subtitle">LIVE. LOUD. UNFORGETTABLE</h2>
        <p class="home-description">
          Experience the music, energy,<br>
          and unforgettable moments of Paramore.
        </p>
        <a class="btn home-register" href="#register">REGISTER NOW</a>
      </div>
      <div class="home-band-image" role="img" aria-label="Paramore band photo"></div>
    </section>

    <section class="home-about">
      <div class="about-description">
        <h2 class="display">ABOUT PARAMORE</h2>
        <p>Paramore is an American rock band known for their energetic<br>
        performances and distinctive alternative rock sound.</p>
      </div>
      <div class="home-stats">
        <div class="stat"><span class="label">FORMED</span><span class="value">2004</span></div>
        <div class="stat"><span class="label">ORIGIN</span><span class="value">Franklin, TN</span></div>
        <div class="stat"><span class="label">GENRE</span><span class="value">Alternative Rock</span></div>
        <div class="stat"><span class="label">ACTIVE YEARS</span><span class="value">2004 - Present</span></div>
      </div>
    </section>`;
}
function renderAlbums() {
  page.className = "page albums-page";
  page.innerHTML = `
    <div class="albums-content">
      <div class="breadcrumb"><span class="red">MUSIC</span> / DISCOGRAPHY</div>

      <section class="album-feature">
        <div class="discography-copy">
          <h1 class="display">DISCOGRAPHY</h1>
          <div class="sub">Explore Paramore's albums and the evolution of their sound.</div>
        </div>

        <img class="feature-art" src="assets/after-laughter-final.jpg" alt="After Laughter album artwork">

        <div class="feature-copy">
          <h2 class="display">AFTER LAUGHTER</h2>
          <div class="year">2017</div>
          <p>A bold, colorful shift. After Laughter explores new sounds while staying true to Paramore's heart.</p>
          <button class="btn" data-action="album" data-index="4">EXPLORE ALBUM</button>
        </div>
      </section>

      <h2 class="albums-heading display">ALBUMS</h2>
      <section class="album-grid">
        ${albums.map((a, i) => `
          <article class="album-card" data-action="album" data-index="${i}">
            <img class="album-cover" src="${a.image}" alt="${a.title}">
            <div class="album-name">${a.title}</div>
            <div class="album-tracks">${a.tracks} TRACKS</div>
          </article>`).join("")}
      </section>
    </div>`;
}
function renderEvents() {
  page.className = "page events-page";
  page.innerHTML = `
    <section class="events-title">
      <div class="display small">EVENTS</div>
      <h1 class="display">GET YOUR TICKETS</h1>
    </section>
    <section class="event-grid">
      ${events.map((e, i) => `
        <article class="event-card">
          <img src="${e.image}" alt="Paramore live in ${e.city}">
          <div class="event-info">
            <h2>PARAMORE LIVE</h2>
            <p class="place">📍 ${e.city}</p>
            <p>📅 Date</p>
            <p>⏰ 7:00 PM</p>
            <button class="btn" data-action="ticket" data-index="${i}">GET TICKETS</button>
          </div>
        </article>`).join("")}
    </section>`;
}
function renderRegister() {
  page.className = "page register-page";
  page.innerHTML = `
    <form class="register-card" id="registerForm" novalidate>
      <h1>CREATE YOUR ACCOUNT</h1>
      <p class="lead">Become part of the Paramore community.</p>
      ${field("fullName", "FULL NAME", "ENTER YOUR FULL NAME", "text")}
      ${field("email", "EMAIL", "ENTER YOUR EMAIL", "email")}
      ${field("password", "PASSWORD", "CREAT A PASSWORD", "password")}
      ${field("confirmPassword", "CONFIRM PASSWORD", "CONFIRM PASSWORD", "password")}
      <button class="btn register-submit" type="submit">CREATE ACCOUNT</button>
      <div class="existing"><a href="#home" id="loginLink">ALREADY HAVE AN ACCOUNT.</a></div>
    </form>`;
  document.getElementById("registerForm").addEventListener("submit", handleRegister);
}
function field(name, label, placeholder, type) {
  return `
    <div class="field">
      <label for="${name}">${label}</label>
      <input id="${name}" name="${name}" type="${type}" placeholder="${placeholder}" autocomplete="off">
      <div class="form-error" id="${name}Error"></div>
    </div>`;
}

function handleRegister(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  let valid = true;

  const errors = {};
  if (!values.fullName.trim() || values.fullName.trim().length < 2) errors.fullName = "Please enter your full name.";
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(values.email)) errors.email = "Please enter a valid email.";
  if (values.password.length < 8) errors.password = "Password must be at least 8 characters.";
  if (values.confirmPassword !== values.password) errors.confirmPassword = "Passwords do not match.";

  Object.keys(values).forEach(key => {
    const input = document.getElementById(key);
    const err = document.getElementById(key + "Error");
    input.classList.toggle("invalid", Boolean(errors[key]));
    err.textContent = errors[key] || "";
  });

  valid = Object.keys(errors).length === 0;
  if (!valid) return;

  localStorage.setItem("paramoreMember", JSON.stringify({
    name: values.fullName.trim(),
    email: values.email.trim()
  }));
  form.reset();
  openModal(`
    <h2>WELCOME TO THE FAMILY</h2>
    <p>Your account has been created successfully.</p>
    <p>Welcome, <strong>${escapeHtml(values.fullName.trim())}</strong>. You're ready to explore Paramore.</p>
    <button class="btn" onclick="closeModal()">CONTINUE</button>
  `);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}

function showAlbum(i) {
  const a = albums[i];
  openModal(`
    <h2>${a.title}</h2>
    <img src="${a.image}" alt="${a.title}">
    <p><strong>${a.year}</strong> · ${a.tracks} tracks</p>
    <p>${a.description}</p>
    <h3>FEATURED TRACKS</h3>
    <ol class="tracklist">${a.songs.map(s => `<li>${s}</li>`).join("")}</ol>
  `);
}

function showTicket(i) {
  const e = events[i];
  openModal(`
    <h2>PARAMORE LIVE — ${e.city}</h2>
    <img src="${e.image}" alt="${e.city} event">
    <p><strong>${e.date}</strong> · ${e.time}</p>
    <p>${e.venue}</p>
    <p>Ticket selection is ready. This demo keeps the purchase step local so you can connect your preferred ticketing service later.</p>
    <button class="btn" id="reserveBtn">RESERVE SPOT</button>
  `);
  document.getElementById("reserveBtn").addEventListener("click", () => {
    closeModal();
    showToast(`Your ${e.city} ticket spot has been reserved!`);
  });
}

function render() {
  const route = location.hash.replace("#", "") || "home";
  const valid = ["home", "albums", "events", "register"];
  const current = valid.includes(route) ? route : "home";
  setActive(current);
  if (current === "home") renderHome();
  if (current === "albums") renderAlbums();
  if (current === "events") renderEvents();
  if (current === "register") renderRegister();
  window.scrollTo(0, 0);
}

page.addEventListener("click", e => {
  const actionEl = e.target.closest("[data-action]");
  if (!actionEl) return;
  if (actionEl.dataset.action === "album") showAlbum(Number(actionEl.dataset.index));
  if (actionEl.dataset.action === "ticket") showTicket(Number(actionEl.dataset.index));
});

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

window.addEventListener("hashchange", render);
render();

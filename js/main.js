/* ========================================
   FireGuard Trading - Main JavaScript
   ======================================== */

// --- WhatsApp Number (replace with your real number) ---
// Format: country code + number, no + or spaces
const WHATSAPP_NUMBER = "8618786431949";

// --- Language Management ---
function setLanguage(lang) {
    const html = document.documentElement;

    if (lang === "ar") {
        html.setAttribute("lang", "ar");
        html.setAttribute("dir", "rtl");
    } else {
        html.setAttribute("lang", "en");
        html.setAttribute("dir", "ltr");
    }

    // Update all translatable elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
        const key = el.getAttribute("data-i18n-ph");
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute("placeholder", translations[lang][key]);
        }
    });

    // Update active button
    document.querySelectorAll(".lang-switch__btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Save preference
    try {
        localStorage.setItem("fg_lang", lang);
    } catch (e) {}

    // Update URL parameter without reload
    const url = new URL(window.location);
    if (lang === "ar") {
        url.searchParams.set("lang", "ar");
    } else {
        url.searchParams.delete("lang");
    }
    window.history.replaceState({}, "", url);
}

// --- Initialize Language ---
function initLanguage() {
    let lang = "en";
    try {
        const saved = localStorage.getItem("fg_lang");
        const urlParams = new URLSearchParams(window.location.search);
        lang = urlParams.get("lang") || saved || "en";
    } catch (e) {}
    setLanguage(lang);
}

// --- Language Switch Buttons ---
document.querySelectorAll(".lang-switch__btn").forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.getAttribute("data-lang"));
    });
});

// --- Mobile Menu Toggle ---
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        nav.classList.toggle("active");
    });
}

// Close mobile menu on link click
document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
    });
});

// --- Header Scroll Effect ---
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// --- Form Submit -> WhatsApp ---
function submitInquiry(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value || "";
    const phone = form.phone.value || "";
    const country = form.country.value || "";
    const message = form.message.value || "";

    const currentLang = document.documentElement.getAttribute("lang") || "en";

    let text;
    if (currentLang === "ar") {
        text = `مرحباً، أنا ${name}%0A`;
        text += `الرقم: ${phone}%0A`;
        text += `الدولة: ${country}%0A`;
        text += `الاستفسار: ${message}`;
    } else {
        text = `Hello, I'm ${name}%0A`;
        text += `WhatsApp: ${phone}%0A`;
        text += `Country: ${country}%0A`;
        text += `Inquiry: ${message}`;
    }

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text).replace(/%2520/g, "%20")}`, "_blank");
    return false;
}

// --- Smooth Scroll for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollInto({ behavior: "smooth", block: "start" });
        }
    });
});

// --- Initialize on Load ---
document.addEventListener("DOMContentLoaded", initLanguage);

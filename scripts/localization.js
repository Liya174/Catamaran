const langs = {
    "en": {
        "title": "Your perfect day in the MED",
        "subtitle": "Life is short. Let the sea set you free."
    },
    "de": {
        "title": "Dein perfekter Urlaubstag",
        "subtitle": "Das Leben ist kurz. Nimm Dir Zeit für Meer!"
    },
    "es": {
        "title": "Su día perfecto en el Mediterráneo",
        "subtitle": "La vida es corta. Deja que el mar te libere!"
    }
}

const defaultLocale = "en";

const supportedLocales = ["en", "de", "es"];

const fullyQualifiedLocaleDefaults = {
  en: "en-US",
  de: "de-DE",
  es: "es-ES",
};

// The active locale
let locale;

// Gets filled with active locale translations
let translations = {};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  const initialLocale = supportedOrDefault(browserLocales(true));
  setLocale(initialLocale);
  bindLocaleSwitcher(initialLocale);
});

// Load translations for the given locale and translate
// the page to this locale
async function setLocale(newLocale) {
  if (newLocale === locale) return;

  const newTranslations = langs[newLocale]

  locale = newLocale;
  translations = newTranslations;
  document.documentElement.lang = newLocale;

  translatePage();
}

// Retrieves translations JSON object for the given
// locale over the network
async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`../locale/${newLocale}.json`);
  return await response.json();
}

// Replace the inner text of all elements with the
// data-i18n-key attribute to translations corresponding
// to their data-i18n-key
function translatePage() {
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach((el) => translateElement(el));
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  element.innerText = translations[key];
}


function isSupported(locale) {
  return supportedLocales.indexOf(locale) > -1;
}

// Retrieve the first locale we support from the given
// array, or return our default locale
function supportedOrDefault(locales) {
  return locales.find(isSupported) || defaultLocale;
}

function bindLocaleSwitcher(initialValue) {
  const langs = Array.from(document.querySelectorAll('.hero-header__first__locale'));
  const initial = langs.find(lang => lang.textContent == initialValue);

  initial.classList.add('active');

  langs.forEach(lang => {
    lang.addEventListener('click', () => {
        setLocale(lang.textContent);
    })
  })
}

/**
 * Retrieve user-preferred locales from browser
 *
 * @param {boolean} languageCodeOnly - when true, returns
 * ["en", "fr"] instead of ["en-US", "fr-FR"]
 * @returns array | undefined
 */
function browserLocales(languageCodeOnly = false) {
  return navigator.languages.map((locale) =>
    languageCodeOnly ? locale.split("-")[0] : locale,
  );
}
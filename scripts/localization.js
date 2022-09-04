const langs = {
    "en": {
        "title": "Your perfect day in the MED",
        "subtitle": "Life is short. Let the sea set you free.",
        "client1_text": "The trip with the Steve Rogers was a perfect end to our holiday. Once again sea, space, fresh sea air and headfirst into the clear waters of Mallorca before heading back home. The crew was super accommodating and nice. For the children, the highlight was being able to stand at the wheel and swim between the runners of the catamaran, while we enjoyed the exceptionally good Aperol Spritz. ...life is beautiful!",
        "cliens_title": "Our Happy Clients",
        "client1_name": "Axel S. from Neustadt I. H.",
        "client2_text": "I never thought I would enjoy sailing so much. Getting to know Mallorca from this side was great. Just jumping into the water from the boat and with the SUP around is really special. We were only 10 guests on board for our turn and somehow we all fitted together. It was like a family trip with nice conversations, chilling time whenever we wanted to and delicious tapas and drinks. Thanks to the great crew for a really perfect day!",
        "client2_name": "Darren B. from Kapstadt",
        "client3_text": "First I was sceptical about turning my golf day into a sailing day... but as soon as we set sail from Palma, that was no longer an issue. You can't get enough of this view over the sea. Complete deceleration. The crew is competent and relaxed; I didn't miss a thing. Even dolphins crossed our path. What more could you want! Only question now: how to fit this new hobby into my everyday life. Thanks to the Skipper and Team and thanks to the Steve Rogers!",
        "client3_name": "Isabell E. from Berlin",
    },
    "de": {
        "title": "Dein perfekter Urlaubstag",
        "subtitle": "Das Leben ist kurz. Nimm Dir Zeit für Meer!",
        "client1_text": "Der Ausflug mit der Steve Rogers war ein perfekter Abschluss für unseren Urlaub. Nochmal Meer, Weite, frische Seeluft und kopfüber ins klare Wasser von Mallorca bevor es wieder nach Hause geht. Die Crew war super zuvorkommend und nett. Für die Kinder war das Highlight selbst mal am Steuer stehen zu dürfen, und zwischen den Kufen des Katamarans hindurch zu schwimmen, während wir den tatsächlich außergewöhnlich guten Aperol Spritz genießen konnten. …das Leben ist schön!",
        "cliens_title": "Unsere Zufriedenen Kunden",
        "client1_name": "Axel S. from Neustadt I. H.",
        "client2_text": "Erst war ich skeptisch meinen Golftag zum Segeltag zu machen… schon nach dem Ablegen in Palma allerdings war das kein Thema mehr. Von diesem Blick über das Meer kann man nicht genug bekommen. Komplette Entschleunigung. Die Crew ist kompetent und entspannt; mir hat nichts gefehlt. Sogar Delfine haben unseren Weg gekreuzt. Was will man mehr! Keine Ahnung wie ich dieses neue Hobby in meinen Alltag unterbringen soll. Wobei… ich buche einfach wieder eine Tour. Danke liebe Steve Rogers!",
        "client2_name": "Darren B. from Kapstadt",
        "client3_text": "Ich hätte nie gedacht, dass mir das Segeln so viel Freude machen würde. Mallorca von dieser Seite kennenzulernen war großartig. Einfach vom Boot aus ins Wasser zu springen und mit dem SUP drum herum ist echt besonders. Wir waren bei unserem Turn nur 10 Gäste an Bord und irgendwie passten wir auch alle zusammen. Wie ein Familienausflug mit netten Gesprächen, chillen wenn man wollte und leckeren Tapas und Drinks. Danke an die tolle Crew für den wirklich perfekten Urlaubstag!",
        "client3_name": "Isabell E. from Berlin",
    },
    "es": {
        "title": "Su día perfecto en el Mediterráneo",
        "subtitle": "La vida es corta. Deja que el mar te libere!",
        "client1_text": "El viaje con el Steve Rogers fue un final perfecto para nuestras vacaciones. De nuevo el mar, el espacio, el aire fresco del mar y la cabeza en las aguas claras de Mallorca antes de volver a casa. La tripulación fue súper complaciente y agradable. Para los niños, lo más destacado fue poder situarse en el timón y nadar entre los corredores del catamarán, mientras nosotros disfrutábamos del excepcionalmente bueno Aperol Spritz. ...¡la vida es bella!",
        "cliens_title": "Nuestros clientes satisfechos",
        "client1_name": "Axel S. from Neustadt I. H.",
        "client2_text": "Nunca pensé que disfrutaría tanto de la navegación. Conocer Mallorca desde este lado fue genial. El mero hecho de saltar al agua desde el barco con el SUP alrededor es realmente especial. Sólo éramos 10 invitados a bordo para nuestro turno y de alguna manera todos encajamos. Fue como un viaje en familia, con agradables conversaciones, relajación si querías y deliciosas tapas y bebidas. ¡Gracias al gran equipo por un día realmente perfecto!",
        "client2_name": "Darren B. from Kapstadt",
        "client3_text": "Al principio era escéptico sobre la posibilidad de convertir mi día de golf en un día de navegación... pero tan pronto como zarpamos de Palma, eso dejó de ser un problema. No te cansarás de ver esta vista sobre el mar. Desaceleración completa. La tripulación es competente y relajada; no eché en falta nada. Incluso los delfines se cruzaron en nuestro camino. ¿Qué más se puede pedir? La única pregunta ahora es: ¿cómo puedo encajar esta nueva afición en mi vida diaria? Gracias al patrón y al equipo y gracias Steve Rogers.",
        "client3_name": "Isabell E. from Berlin",
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
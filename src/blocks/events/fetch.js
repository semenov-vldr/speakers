// --- FETCH DATA.JSON ---
const API_URL = "./assets/files/data.json";

async function getDataEvents() {
  return await fetch(API_URL)
    .then((response) => response.json())
    .then(events => events.data)
    .catch((error) => alert("Ошибка при загрузке данных с сервера!", error));
}

const dataEvents = await getDataEvents();
const blockCards = document.querySelector(".events__cards");

function renderCardsEvents(dataEvents) {

  // sorting in order
  dataEvents.sort((a, b) => a.display_order - b.display_order);

  dataEvents.forEach(dataEvent => {
    if (dataEvent["show_on_site"]) {
      const article = document.createElement("article");
      article.classList.add("events__card", "events-card");
      article.dataset.country = dataEvent.country;
      article.dataset.hall = dataEvent.hall;
      article.dataset.program = dataEvent["program_track"];

      article.innerHTML = `
        <div class="events-card__header">
          <div class="events-card__author">
            <span class="events-card__author-name">${dataEvent["first_name_ru"]} ${dataEvent["last_name_ru"]}</span>
            <span class="events-card__author-country">${dataEvent["country"]}</span>
          </div>
          <img class="events-card__img" src=${dataEvent["photo"]} alt="userpic">
        </div>
        <div class="events-card__desc">
          <p>${dataEvent["about_ru"]}</p>
        </div>`;

      blockCards.appendChild(article);
    }
  });
}

renderCardsEvents(dataEvents);



// Filters
const filterEvents = document.querySelector("#filter");

const filterSelectCountry = filterEvents.querySelector(".events-filter__country");
const filterSelectProgram = filterEvents.querySelector(".events-filter__program");
const filterSelectHall = filterEvents.querySelector(".events-filter__hall");

const eventsCards = blockCards.querySelectorAll(".events-card");

filterEvents.addEventListener("change", handlerEventFilter);
filterEvents.dispatchEvent(new Event('change'));

function handlerEventFilter() {
  const selectedCountry = filterSelectCountry.querySelector(".select-button span").textContent;
  const selectedProgram = filterSelectProgram.querySelector(".select-button span").textContent;
  const selectedHall = filterSelectHall.querySelector(".select-button span").textContent;


  const eventsMessage = blockCards.querySelector(".events__message");

  eventsCards.forEach(eventsCard => {
    const matchingCountry = selectedCountry === eventsCard.dataset.country || selectedCountry === "Страна";
    const matchingProgram = selectedProgram === eventsCard.dataset.program || selectedProgram === "Трек программы";
    const matchingHall = selectedHall === eventsCard.dataset.hall || selectedHall === "Зал";

    eventsCard.classList.toggle("js-hidden", !(matchingCountry && matchingProgram && matchingHall));
  });



  const isEmpty = Array.from(eventsCards).every(card => card.classList.contains("js-hidden"));
  eventsMessage.classList.toggle("hidden", !isEmpty);





}






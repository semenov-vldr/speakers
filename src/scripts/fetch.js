handlerEvents();

async function handlerEvents() {
  const events = document.querySelector("#events");
  if (!events) return;

  // --- FETCH DATA.JSON ---
  const API_URL = "./assets/files/data_new.json";

  async function getDataEvents() {
    return await fetch(API_URL)
      .then((response) => response.json())
      .then(events => events.data)
      .catch((error) => alert("Ошибка при загрузке данных с сервера!", error));
  }

  const dataEvents = await getDataEvents();
  const blockCards = document.querySelector(".events__cards");

// --------- Render Cards ---------

  renderCardsEvents(dataEvents);

  function renderCardsEvents(dataEvents) {

    // sorting in order
    dataEvents.sort((a, b) => a.display_order - b.display_order);

    dataEvents.forEach(dataEvent => {
        const article = document.createElement("article");
        article.classList.add("events__card", "events-card");
        article.dataset.country = dataEvent.country['name_ru'];

        // Добавление всех треков и залов для спикера в дата-атрибуты
        dataEvent['sessions_speaker'].forEach((session, i) => {
          article.setAttribute(`data-hall-${i}`, session['sessions_id'].hall['title_ru']);
          article.setAttribute(`data-track-${i}`, session['sessions_id'].track['title_ru']);
          article.setAttribute(`data-date-${i}`, session['sessions_id'].day['date_typed']);
        });

        article.innerHTML = `
        <div class="events-card__header">
          <div class="events-card__author">
            <span class="events-card__author-name">${dataEvent["first_name_ru"]} ${dataEvent["last_name_ru"]}</span>
            <span class="events-card__author-country">${dataEvent["country"]["name_ru"]}</span>
          </div>
          <img class="events-card__img" src= https://forumnewmedia-api.com/assets/${dataEvent["photo"]}?height=70&format=webp&quality=50 alt="userpic">
        </div>
        <div class="events-card__desc">
          <p>${dataEvent["about_ru"]}</p>
        </div>`;

        blockCards.appendChild(article);
    });
  }
// ---------END Render Cards ---------



// --------- Filters ---------
  const eventsSettings = document.querySelector("#settings");
  const filterEvents = document.querySelector("#filter");

  const filterSelectCountry = filterEvents.querySelector(".events-filter__country");
  const filterSelectTrack = filterEvents.querySelector(".events-filter__track");
  const filterSelectHall = filterEvents.querySelector(".events-filter__hall");

  const eventsCards = blockCards.querySelectorAll(".events-card");

  eventsSettings.addEventListener("change", handlerEventSettings);
  eventsSettings.dispatchEvent(new Event('change'));




  // --- Заполнение фильтра ---
  fillingDataFilter();

  function fillingDataFilter() {

    // Создание и добавление элементов списка в фильтре
    function addItemsDropdown(value, name, parent) {
      const li = document.createElement("li");
      li.innerHTML = `
        <label>
          <span>${value}</span>
          <input type="radio" name=${name} value=${value}>
        </label>`;
      parent.appendChild(li);
    };

    // -- Страны из json --
    const countryList = dataEvents
      .map(item => item.country['name_ru'])
      .filter((value, index, self) => self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(value)) === index);

    // Добавляем список стран из json в dropdown фильтра
    const filterCountriesDropdown = filterSelectCountry.querySelector(".select-dropdown");
    countryList.forEach(country => addItemsDropdown(country, 'country',filterCountriesDropdown));


    // -- tracks из json --
    const trackList = dataEvents
      .map(item => item.sessions_speaker).flat().map(item => item.sessions_id.track.title_ru)
      .filter((value, index, self) => self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(value)) === index);

    // Добавляем список треков из json в dropdown фильтра
    const filterTracksDropdown = filterSelectTrack.querySelector(".select-dropdown");
    trackList.forEach(track => addItemsDropdown(track, 'track', filterTracksDropdown));


    // -- halls из json --
    const hallList = dataEvents
      .map(item => item.sessions_speaker).flat().map(item => item.sessions_id.hall.title_ru)
      .filter((value, index, self) => self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(value)) === index);

    // Добавляем список залов из json в dropdown фильтра
    const filterHallsDropdown = filterSelectHall.querySelector(".select-dropdown");
    hallList.forEach(hall => addItemsDropdown(hall, hall, filterHallsDropdown));
  };



  // Dates

  function handlerEventSettings() {

    // ---Filter ---
    const selectedCountry = filterSelectCountry.querySelector(".select-button span").textContent;
    const selectedTrack = filterSelectTrack.querySelector(".select-button span").textContent;
    const selectedHall = filterSelectHall.querySelector(".select-button span").textContent;

    const dateSettingsActive = events.querySelector("#date .events-dates__item input[type='radio']:checked");



    const eventsMessage = blockCards.querySelector(".events__message");

    eventsCards.forEach(eventsCard => {
      // Страны
      const matchingCountry = selectedCountry === eventsCard.dataset.country || selectedCountry === "Все страны";

      // Программы
      const dataTrackAttrs = Array.from(eventsCard.attributes).filter(attr => attr.name.startsWith('data-track'));
      const matchingTrack = dataTrackAttrs.some(dataTrack => selectedTrack === eventsCard.getAttribute(dataTrack.name) || selectedTrack === "Трек программы")

      // Залы
      const dataHallAttrs = Array.from(eventsCard.attributes).filter(attr => attr.name.startsWith('data-hall'));
      const matchingHall = dataHallAttrs.some(dataHall => selectedHall === eventsCard.getAttribute(dataHall.name) || selectedHall === "Все залы")


      // Даты
      const dataDateAttrs = Array.from(eventsCard.attributes).filter(attr => attr.name.startsWith('data-date'));
      const matchingDate = dataDateAttrs.some(dataDate => dateSettingsActive.value === eventsCard.getAttribute(dataDate.name) || dateSettingsActive.value === "все даты")


      eventsCard.classList.toggle("js-hidden", !(matchingCountry && matchingTrack && matchingHall && matchingDate));
    });



    const isEmpty = Array.from(eventsCards).every(card => card.classList.contains("js-hidden"));
    eventsMessage.classList.toggle("hidden", !isEmpty);






  }

// --------- END Filters ---------
};










handlerEvents();

async function handlerEvents() {
  const events = document.querySelector("#events");
  if (!events) return;


  // check current Date
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  const formattedDate2 = '2024-10-13';

  const settingDatesDesktop = events.querySelectorAll('#date .events-dates__list-desktop .events-dates__item input[type="radio"]');
  settingDatesDesktop.forEach(settingDate => {
    if (settingDate.value === formattedDate) settingDate.checked = true;
  });

  const settingCurrentDate = events.querySelector('#date .events-dates__list-mobile .custom-select .select-button span');
  const settingDatesMobile = events.querySelectorAll('#date .events-dates__list-mobile .custom-select input[type="radio"]');
  settingDatesMobile.forEach(settingDate => {
    if (settingDate.value === formattedDate) {
      settingCurrentDate.textContent = formattedDate;
      settingDate.checked = true;
    }
  });


  // --- FETCH DATA.JSON ---
  const API_URL = "./assets/files/data_new.json";
  const API_URL_CURRENT = 'https://forumnewmedia-api.com/items/speakers?fields%5B%5D=id,first_name_ru,last_name_ru,first_name_en,last_name_en,about_ru,about_en,country.id,country.name_ru,country.name_en,display_order,photo,sessions_speaker.sessions_id.track.id,sessions_speaker.sessions_id.track.title_en,sessions_speaker.sessions_id.track.title_ru,sessions_speaker.sessions_id.hall.id,sessions_speaker.sessions_id.hall.title_en,sessions_speaker.sessions_id.hall.title_ru,sessions_speaker.sessions_id.start,sessions_speaker.sessions_id.finish,sessions_speaker.sessions_id.day.id,sessions_speaker.sessions_id.day.day_ru,sessions_speaker.sessions_id.day.day_en,sessions_speaker.sessions_id.day.date_typed'

  async function getDataEvents() {
    return await fetch(API_URL_CURRENT)
      .then((response) => response.json())
      .then(events => events.data)
      .catch((error) => alert("Ошибка при загрузке данных с сервера!", error));
  }

  let dataEvents = await getDataEvents();
  const blockCards = document.querySelector(".events__cards");


  // --------- Выбор языка RU/EN ---------

  function mapFields(item, LANG) {
    return  {
      "id": item.id,
      "first_name": LANG === 'EN' ? item.first_name_en : item.first_name_ru,
      "last_name": LANG === 'EN' ? item.last_name_en : item.last_name_ru,
      "about": LANG === 'EN' ? item.about_en : item.about_ru,
      "display_order": item.display_order,
      "photo": item.photo,
      "country": {
        "id": item.country.id,
        "name": LANG === 'EN' ? item.country.name_en : item.country.name_ru
      },
      "sessions_speaker": Array.isArray(item.sessions_speaker) ? item.sessions_speaker.map(s => {
        if (s.sessions_id) {
          return {
            "sessions_id": {
              "start": s.sessions_id.start,
              "finish": s.sessions_id.finish,
              "track": {
                "id": s.sessions_id.track.id,
                "title": LANG === 'EN' ? s.sessions_id.track.title_en : s.sessions_id.track.title_ru
              },
              "hall": {
                "id": s.sessions_id.hall.id,
                "title": LANG === 'EN' ? s.sessions_id.hall.title_en : s.sessions_id.hall.title_ru
              },
              "day": {
                "id": s.sessions_id.day.id,
                "day": LANG === 'EN' ? s.sessions_id.day.day_en : s.sessions_id.day.day_ru,
                "date_typed": s.sessions_id.day.date_typed
              }
            }
          }
        }
        return null;
      }).filter(s => s !== null) : []
    };
  }

  function preprocessData(dataList, LANG) {
    return dataList.map(item => mapFields(item, LANG));
  }

  const LANG = "RU";
  dataEvents = preprocessData(dataEvents, LANG);


// --------- Render Cards ---------

  renderCardsEvents(dataEvents);

  function renderCardsEvents(dataEvents) {

    // sorting in order
    dataEvents.sort((a, b) => a.display_order - b.display_order);

    dataEvents.forEach(dataEvent => {
        const article = document.createElement("article");
        article.classList.add("events__card", "events-card");
        article.dataset.country = dataEvent.country['name'];

        // Добавление всех треков и залов для спикера в дата-атрибуты
        if (dataEvent['sessions_speaker'].length) {
          dataEvent['sessions_speaker'].forEach((session, i) => {
            article.setAttribute(`data-hall-${i}`, session['sessions_id'].hall['title']);
            article.setAttribute(`data-track-${i}`, session['sessions_id'].track['title']);
            article.setAttribute(`data-date-${i}`, session['sessions_id'].day['date_typed']);
          });
        }
        // В случае, если в карточке нет данных о мероприятиях (пустой массив 'sessions_speaker')
        else {
            article.setAttribute('data-hall', "empty");
            article.setAttribute('data-track', "empty");
            article.setAttribute('data-date', "empty");
        }


        const imgSrc = `https://forumnewmedia-api.com/assets/${dataEvent["photo"]}?height=70&format=webp&quality=50 alt="userpic"`;

        article.innerHTML = `
        <div class="events-card__header">
          <div class="events-card__author">
            <span class="events-card__author-name">${dataEvent["first_name"]} ${dataEvent["last_name"]}</span>
            <span class="events-card__author-country">${dataEvent["country"]["name"]}</span>
          </div>
          <img class="events-card__img" src=${imgSrc}>
        </div>
        <div class="events-card__desc">
          <p>${dataEvent["about"]}</p>
        </div>`;

        blockCards.appendChild(article);


        // Добавление дефолтной картинки
        const cardImg = article.querySelector("img");
        cardImg.addEventListener("error", () => {
          const defaultImg = "https://forumnewmedia-api.com/assets/944cb306-eb44-48b9-927e-b7a502be7fa4";
          cardImg.src = defaultImg;
        });

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
      .map(item => item.country['name'])
      .filter((value, index, self) => self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(value)) === index);

    // Добавляем список стран из json в dropdown фильтра
    const filterCountriesDropdown = filterSelectCountry.querySelector(".select-dropdown");
    countryList.forEach(country => addItemsDropdown(country, 'country',filterCountriesDropdown));


    // -- tracks из json --
    const trackList = dataEvents
      .map(item => item.sessions_speaker).flat().map(item => item.sessions_id.track.title)
      .filter((value, index, self) => self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(value)) === index);

    // Добавляем список треков из json в dropdown фильтра
    const filterTracksDropdown = filterSelectTrack.querySelector(".select-dropdown");
    trackList.forEach(track => addItemsDropdown(track, 'track', filterTracksDropdown));


    // -- halls из json --
    const hallList = dataEvents
      .map(item => item.sessions_speaker).flat().map(item => item.sessions_id.hall.title)
      .filter((value, index, self) => self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(value)) === index);

    // Добавляем список залов из json в dropdown фильтра
    const filterHallsDropdown = filterSelectHall.querySelector(".select-dropdown");
    hallList.forEach(hall => addItemsDropdown(hall, 'hall', filterHallsDropdown));
  };



  // Dates

  function handlerEventSettings() {

    // ---Filter ---
    const selectedCountry = filterSelectCountry.querySelector(".select-button span").textContent;
    const selectedTrack = filterSelectTrack.querySelector(".select-button span").textContent;
    const selectedHall = filterSelectHall.querySelector(".select-button span").textContent;

    const dateSettingsDesktopActive = events.querySelector("#date .events-dates__item input[type='radio']:checked");
    const dateSettingsMobileActive = events.querySelector("#date .events-dates__list-mobile .select-dropdown input[type='radio']:checked");



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

      // Даты (desktop)
      const dataDateAttrs = Array.from(eventsCard.attributes).filter(attr => attr.name.startsWith('data-date'));
      const matchingDateDesktop = dataDateAttrs.some(dataDate => dateSettingsDesktopActive.value === eventsCard.getAttribute(dataDate.name) || dateSettingsDesktopActive.value === "все даты");

      const matchingDateMobile = dataDateAttrs.some(dataDate => dateSettingsMobileActive.value === eventsCard.getAttribute(dataDate.name) || dateSettingsMobileActive.value === "все даты");


      // Показ/Скрытие карточек по условию фильтра
      eventsCard.classList.toggle("js-hidden", !(matchingCountry && matchingTrack && matchingHall && matchingDateDesktop && matchingDateMobile));
    });


    const isEmpty = Array.from(eventsCards).every(card => card.classList.contains("js-hidden"));
    eventsMessage.classList.toggle("hidden", !isEmpty);

  }

// --------- END Filters ---------
};










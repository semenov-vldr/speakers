"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
handlerEvents();
function handlerEvents() {
  return _handlerEvents.apply(this, arguments);
}
function _handlerEvents() {
  _handlerEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var events, today, formattedDate, formattedDate2, API_URL, API_URL_CURRENT, getDataEvents, _getDataEvents, dataEvents, blockCards, mapFields, preprocessData, LANG, renderCardsEvents, resetFilterBtn, eventsSettings, filterEvents, filterSelectCountry, filterSelectTrack, filterSelectHall, eventsCards, fillingDataFilter, handlerEventSettings;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          handlerEventSettings = function _handlerEventSettings() {
            // ---Filter ---
            var selectedCountry = filterSelectCountry.querySelector(".select-button span").textContent;
            var selectedTrack = filterSelectTrack.querySelector(".select-button span").textContent;
            var selectedHall = filterSelectHall.querySelector(".select-button span").textContent;
            var dateSettingsDesktopActive = events.querySelector("#date .events-dates__item input[type='radio']:checked");
            var dateSettingsMobileActive = events.querySelector("#date .events-dates__list-mobile .select-dropdown input[type='radio']:checked");
            var eventsMessage = blockCards.querySelector(".events__message");
            eventsCards.forEach(function (eventsCard) {
              // Страны
              var matchingCountry = selectedCountry === eventsCard.dataset.country || selectedCountry === "Все страны";

              // Программы
              var dataTrackAttrs = Array.from(eventsCard.attributes).filter(function (attr) {
                return attr.name.startsWith('data-track');
              });
              var matchingTrack = dataTrackAttrs.some(function (dataTrack) {
                return selectedTrack === eventsCard.getAttribute(dataTrack.name) || selectedTrack === "Трек программы";
              });

              // Залы
              var dataHallAttrs = Array.from(eventsCard.attributes).filter(function (attr) {
                return attr.name.startsWith('data-hall');
              });
              var matchingHall = dataHallAttrs.some(function (dataHall) {
                return selectedHall === eventsCard.getAttribute(dataHall.name) || selectedHall === "Все залы";
              });

              // Даты (desktop)
              var dataDateAttrs = Array.from(eventsCard.attributes).filter(function (attr) {
                return attr.name.startsWith('data-date');
              });
              var matchingDateDesktop = dataDateAttrs.some(function (dataDate) {
                return dateSettingsDesktopActive.value === eventsCard.getAttribute(dataDate.name) || dateSettingsDesktopActive.value === "все даты";
              });
              var matchingDateMobile = dataDateAttrs.some(function (dataDate) {
                return dateSettingsMobileActive.value === eventsCard.getAttribute(dataDate.name) || dateSettingsMobileActive.value === "все даты";
              });

              // Показ/Скрытие карточек по условию фильтра
              eventsCard.classList.toggle("js-hidden", !(matchingCountry && matchingTrack && matchingHall && matchingDateDesktop && matchingDateMobile));
            });
            var isEmpty = Array.from(eventsCards).every(function (card) {
              return card.classList.contains("js-hidden");
            });
            eventsMessage.classList.toggle("hidden", !isEmpty);
          };
          fillingDataFilter = function _fillingDataFilter() {
            // Создание и добавление элементов списка в фильтре
            function addItemsDropdown(value, name, parent) {
              var li = document.createElement("li");
              li.innerHTML = "\n        <label>\n          <span>".concat(value, "</span>\n          <input type=\"radio\" name=").concat(name, " value=").concat(value, ">\n        </label>");
              parent.appendChild(li);
            }
            ;

            // -- Страны из json --
            var countryList = dataEvents.map(function (item) {
              return item.country['name'];
            }).filter(function (value, index, self) {
              return self.findIndex(function (obj) {
                return JSON.stringify(obj) === JSON.stringify(value);
              }) === index;
            });

            // Добавляем список стран из json в dropdown фильтра
            var filterCountriesDropdown = filterSelectCountry.querySelector(".select-dropdown");
            countryList.forEach(function (country) {
              return addItemsDropdown(country, 'country', filterCountriesDropdown);
            });

            // -- tracks из json --
            var trackList = dataEvents.map(function (item) {
              return item.sessions_speaker;
            }).flat().map(function (item) {
              return item.sessions_id.track.title;
            }).filter(function (value, index, self) {
              return self.findIndex(function (obj) {
                return JSON.stringify(obj) === JSON.stringify(value);
              }) === index;
            });

            // Добавляем список треков из json в dropdown фильтра
            var filterTracksDropdown = filterSelectTrack.querySelector(".select-dropdown");
            trackList.forEach(function (track) {
              return addItemsDropdown(track, 'track', filterTracksDropdown);
            });

            // -- halls из json --
            var hallList = dataEvents.map(function (item) {
              return item.sessions_speaker;
            }).flat().map(function (item) {
              return item.sessions_id.hall.title;
            }).filter(function (value, index, self) {
              return self.findIndex(function (obj) {
                return JSON.stringify(obj) === JSON.stringify(value);
              }) === index;
            });

            // Добавляем список залов из json в dropdown фильтра
            var filterHallsDropdown = filterSelectHall.querySelector(".select-dropdown");
            hallList.forEach(function (hall) {
              return addItemsDropdown(hall, 'hall', filterHallsDropdown);
            });
          };
          renderCardsEvents = function _renderCardsEvents(dataEvents) {
            // sorting in order
            dataEvents.sort(function (a, b) {
              return a.display_order - b.display_order;
            });
            dataEvents.forEach(function (dataEvent) {
              var article = document.createElement("article");
              article.classList.add("events__card", "events-card");
              article.dataset.country = dataEvent.country['name'];

              // Добавление всех треков и залов для спикера в дата-атрибуты
              if (dataEvent['sessions_speaker'].length) {
                dataEvent['sessions_speaker'].forEach(function (session, i) {
                  article.setAttribute("data-hall-".concat(i), session['sessions_id'].hall['title']);
                  article.setAttribute("data-track-".concat(i), session['sessions_id'].track['title']);
                  article.setAttribute("data-date-".concat(i), session['sessions_id'].day['day']);
                });
              }
              // В случае, если в карточке нет данных о мероприятиях (пустой массив 'sessions_speaker')
              else {
                article.setAttribute('data-hall', "empty");
                article.setAttribute('data-track', "empty");
                article.setAttribute('data-date', "empty");
              }
              var imgSrc = "https://forumnewmedia-api.com/assets/".concat(dataEvent["photo"], "?height=70&format=webp&quality=50 alt=\"userpic\"");
              article.innerHTML = "\n        <div class=\"events-card__header\">\n          <div class=\"events-card__author\">\n            <span class=\"events-card__author-name\">".concat(dataEvent["first_name"], " ").concat(dataEvent["last_name"], "</span>\n            <span class=\"events-card__author-country\">").concat(dataEvent["country"]["name"], "</span>\n          </div>\n          <img class=\"events-card__img\" src=").concat(imgSrc, ">\n        </div>\n        <div class=\"events-card__desc\">\n          <p>").concat(dataEvent["about"], "</p>\n        </div>");
              blockCards.appendChild(article);

              // Добавление дефолтной картинки
              var cardImg = article.querySelector("img");
              cardImg.addEventListener("error", function () {
                var defaultImg = "https://forumnewmedia-api.com/assets/944cb306-eb44-48b9-927e-b7a502be7fa4";
                cardImg.src = defaultImg;
              });
            });
          };
          preprocessData = function _preprocessData(dataList, LANG) {
            return dataList.map(function (item) {
              return mapFields(item, LANG);
            });
          };
          mapFields = function _mapFields(item, LANG) {
            return {
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
              "sessions_speaker": Array.isArray(item.sessions_speaker) ? item.sessions_speaker.map(function (s) {
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
                  };
                }
                return null;
              }).filter(function (s) {
                return s !== null;
              }) : []
            };
          };
          _getDataEvents = function _getDataEvents3() {
            _getDataEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(API_URL).then(function (response) {
                      return response.json();
                    }).then(function (events) {
                      return events.data;
                    })["catch"](function (error) {
                      return alert("Ошибка при загрузке данных с сервера!", error);
                    });
                  case 2:
                    return _context.abrupt("return", _context.sent);
                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return _getDataEvents.apply(this, arguments);
          };
          getDataEvents = function _getDataEvents2() {
            return _getDataEvents.apply(this, arguments);
          };
          events = document.querySelector("#events");
          if (events) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return");
        case 10:
          // check current Date
          today = new Date();
          formattedDate = today.toISOString().slice(0, 10);
          formattedDate2 = '2024-10-13'; // const settingDatesDesktop = events.querySelectorAll('#date .events-dates__list-desktop .events-dates__item input[type="radio"]');
          // settingDatesDesktop.forEach(settingDate => {
          //   if (settingDate.value === formattedDate) settingDate.checked = true;
          // });
          //
          // const settingCurrentDate = events.querySelector('#date .events-dates__list-mobile .custom-select .select-button span');
          // const settingDatesMobile = events.querySelectorAll('#date .events-dates__list-mobile .custom-select input[type="radio"]');
          // settingDatesMobile.forEach(settingDate => {
          //   if (settingDate.value === formattedDate) {
          //     settingCurrentDate.textContent = formattedDate;
          //     settingDate.checked = true;
          //   }
          // });
          // --- FETCH DATA.JSON ---
          API_URL = "./assets/files/data_new.json";
          API_URL_CURRENT = 'https://forumnewmedia-api.com/items/speakers?fields%5B%5D=id,first_name_ru,last_name_ru,first_name_en,last_name_en,about_ru,about_en,country.id,country.name_ru,country.name_en,display_order,photo,sessions_speaker.sessions_id.track.id,sessions_speaker.sessions_id.track.title_en,sessions_speaker.sessions_id.track.title_ru,sessions_speaker.sessions_id.hall.id,sessions_speaker.sessions_id.hall.title_en,sessions_speaker.sessions_id.hall.title_ru,sessions_speaker.sessions_id.start,sessions_speaker.sessions_id.finish,sessions_speaker.sessions_id.day.id,sessions_speaker.sessions_id.day.day_ru,sessions_speaker.sessions_id.day.day_en,sessions_speaker.sessions_id.day.date_typed';
          _context2.next = 17;
          return getDataEvents();
        case 17:
          dataEvents = _context2.sent;
          blockCards = document.querySelector(".events__cards"); // --------- Выбор языка RU/EN ---------
          LANG = "RU";
          dataEvents = preprocessData(dataEvents, LANG);

          // --------- Render Cards ---------

          renderCardsEvents(dataEvents);
          // ---------END Render Cards ---------
          resetFilterBtn = document.querySelector("#filter-reset"); // --------- Filters ---------
          eventsSettings = document.querySelector("#settings");
          filterEvents = document.querySelector("#filter");
          filterSelectCountry = filterEvents.querySelector(".events-filter__country");
          filterSelectTrack = filterEvents.querySelector(".events-filter__track");
          filterSelectHall = filterEvents.querySelector(".events-filter__hall");
          eventsCards = blockCards.querySelectorAll(".events-card");
          eventsSettings.addEventListener("change", handlerEventSettings);
          eventsSettings.dispatchEvent(new Event('change'));

          // --- Заполнение фильтра ---
          fillingDataFilter();
          ;

          // Dates

          // --------- END Filters ---------
        case 33:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _handlerEvents.apply(this, arguments);
}
;
"use strict";
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// --- masonry-effect ---
var mainId = 'masonry-effect';
var itemIdentifier = '#masonry-effect .events-card';
var mobileWidthMediaQuery = window.matchMedia('(min-width: 767px)');
if (mobileWidthMediaQuery.matches) {
  //document.addEventListener('DOMContentLoaded', masonry_effect);
}
function masonry_effect() {
  // Programmatically get the column width
  var item = document.querySelector(itemIdentifier);
  if (!item) return;
  var parentWidth = item.parentNode.getBoundingClientRect().width;
  var itemWidth = item.getBoundingClientRect().width + parseFloat(getComputedStyle(item).marginLeft) + parseFloat(getComputedStyle(item).marginRight);
  var columnWidth = Math.round(1 / (itemWidth / parentWidth));

  // We need this line since JS nodes are dumb
  var arrayOfItems = Array.prototype.slice.call(document.querySelectorAll(itemIdentifier));
  var trackHeights = {};
  arrayOfItems.forEach(function (item) {
    // Get index of item
    var thisIndex = arrayOfItems.indexOf(item);
    // Get column this and set width
    var thisColumn = thisIndex % columnWidth;
    if (typeof trackHeights[thisColumn] == "undefined") {
      trackHeights[thisColumn] = 0;
    }
    trackHeights[thisColumn] += item.getBoundingClientRect().height + parseFloat(getComputedStyle(item).marginBottom);
    // If the item has an item above it, then move it to fill the gap
    if (thisIndex - columnWidth >= 0) {
      var getItemAbove = document.querySelector("".concat(itemIdentifier, ":nth-of-type(").concat(thisIndex - columnWidth + 1, ")"));
      var previousBottom = getItemAbove.getBoundingClientRect().bottom;
      var currentTop = item.getBoundingClientRect().top - parseFloat(getComputedStyle(item).marginBottom);
      item.style.top = "-".concat(currentTop - previousBottom, "px");
    }
  });
  var max = Math.max.apply(Math, _toConsumableArray(Object.values(trackHeights)));
  document.getElementById(mainId).style.height = "".concat(max, "px");
}
"use strict";

// --- Custom select ---

setTimeout(createCustomSelect, 2000);
function createCustomSelect() {
  var customSelectList = document.querySelectorAll(".custom-select");
  if (!customSelectList) return;
  customSelectList.forEach(function (customSelect) {
    // hide on click outside select
    document.addEventListener("click", function (evt) {
      if (!customSelect.contains(evt.target)) {
        customSelect.classList.remove("active");
      }
    });
    var selectBtn = customSelect.querySelector(".select-button");
    var optionsList = customSelect.querySelectorAll(".select-dropdown li");
    selectBtn.addEventListener("click", function () {
      customSelect.classList.toggle("active");
    });
    optionsList.forEach(function (option) {
      function handler(e) {
        var clickedValue = this.querySelector("span");
        // Click Events
        if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
          selectBtn.querySelector("span").textContent = clickedValue.textContent;
          customSelect.classList.remove("active");
        }
        // Key Events
        if (e.key === "Enter") {
          selectBtn.querySelector("span").textContent = this.textContent;
          customSelect.classList.remove("active");
        }
      }
      option.addEventListener("keyup", handler);
      option.addEventListener("click", handler);
    });
  });
}
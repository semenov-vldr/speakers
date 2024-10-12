"use strict";

var html = document.querySelector('html');
var classBlockScroll = "js-no-scroll";
function blockScrollBody() {
  if (!html.classList.contains(classBlockScroll)) {
    html.classList.add(classBlockScroll);
  }
}
;
function unblockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  }
}
;
function toggleBlockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  } else {
    html.classList.add(classBlockScroll);
  }
}
;
"use strict";
"use strict";

// --- Custom select ---
var customSelectList = document.querySelectorAll(".custom-select");
if (customSelectList) {
  customSelectList.forEach(function (customSelect) {
    var selectBtn = customSelect.querySelector(".select-button");
    var optionsList = customSelect.querySelectorAll(".select-dropdown li");

    // add click event to select button
    selectBtn.addEventListener("click", function () {
      // add/remove active class on the container element
      customSelect.classList.toggle("active");
      // update the aria-expanded attribute based on the current state
      selectBtn.setAttribute("aria-expanded", selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true");
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
  document.addEventListener('DOMContentLoaded', masonry_effect);
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

// --- Custom select ---

setTimeout(createCustomSelect, 2000)

function createCustomSelect() {
  const customSelectList = document.querySelectorAll(".custom-select");

  if (!customSelectList) return;

    customSelectList.forEach(customSelect => {

      // hide on click outside select
      document.addEventListener("click", (evt) => {
        if (!customSelect.contains(evt.target)) {
          customSelect.classList.remove("active");
        }
      });

      const selectBtn = customSelect.querySelector(".select-button");
      const optionsList = customSelect.querySelectorAll(".select-dropdown li");


      selectBtn.addEventListener("click", () => {
        customSelect.classList.toggle("active");
      });

      optionsList.forEach((option) => {
        function handler(e) {
          const clickedValue = this.querySelector("span");
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




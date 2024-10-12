
// --- Custom select ---
const customSelectList = document.querySelectorAll(".custom-select");

if (customSelectList) {

  customSelectList.forEach(customSelect => {

    const selectBtn = customSelect.querySelector(".select-button");
    const optionsList = customSelect.querySelectorAll(".select-dropdown li");


    // add click event to select button
    selectBtn.addEventListener("click", () => {
      // add/remove active class on the container element
      customSelect.classList.toggle("active");
      // update the aria-expanded attribute based on the current state
      selectBtn.setAttribute(
        "aria-expanded",
        selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
      );
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

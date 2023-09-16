// things to select in javacript:
/* dropdowns */
/* dropdown background */

/* nav */
/* input */
/* prices */

const triggers = document.querySelectorAll(".links-container > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".nav");
const button = document.querySelector("#button");
const checkedbox = document.querySelector("#toggle");
const workflowPlanPrice = document.querySelector(".workflow-reg");
const workflowPlusPlanPrice = document.querySelector(".workflow-prem");

// workflowPlanPrice.innerHTML = "200 / Month";
function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active");
  }, 150);
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter");
  this.classList.remove("trigger-enter-active");
  background.classList.remove("open");
}

function togglePrice() {
  if (!checkedbox.checked) {
    workflowPlanPrice.innerHTML = "80/Month";
    workflowPlusPlanPrice.innerHTML = "110/Month";
  } else {
    workflowPlanPrice.innerHTML = "10/Yearly";
    workflowPlusPlanPrice.innerHTML = "15/Yearly";
  }
}

button.addEventListener("click", togglePrice);

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseover", handleEnter);
});

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseleave", handleLeave);
});

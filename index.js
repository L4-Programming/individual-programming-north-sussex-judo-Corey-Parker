import { validateInput } from "./validateInput.js";

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputsObject = {
    name: document.querySelector("#nameInput").value,
    plan: document.querySelector("#planInput").value,
    weight: document.querySelector("#weightInput").value,
    cat:document.querySelector("#categoryInput").value,
    coaching: document.querySelector("#coachingInput").value,
    competition: document.querySelector("#competitionInput").value
  }
validateInput(inputsObject)
console.log(inputsObject)
})
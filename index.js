import { validateInput } from "./validateInput.js";

let form = document.querySelector("form");


categoryObject = {
  Heavy : 750,
	LHeavy : 100,
	Middle : 90,
	LMiddle : 81,
	Light : 73,
	LLight : 66
}

Object.keys(categoryObject).forEach(key => {
  
 categorySelect = document.querySelector("#categoryInput");
 categorySelect.options[categorySelect.options.length] = new Option(key +""+myObj[key], key);

})


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
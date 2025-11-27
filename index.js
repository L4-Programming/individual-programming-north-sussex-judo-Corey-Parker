import { validateInput } from "./validateInput.js";

let form = document.querySelector("form");


let categoryObject = {
  Heavyweight : 750,
	LightHeavyweight : 100,
	Middleweight : 90,
	LightMiddleweight : 81,
	Lightweight : 73,
	Flyweight : 66
}



let categorySelect = document.querySelector("#categoryInput");



Object.keys(categoryObject).forEach(key => {
  categorySelect.options[categorySelect.options.length] = new Option(`${key.replace(/([a-z])([A-Z])/g, '$1 $2')}: <${categoryObject[key]}kg`, key);
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
  
validateInput(inputsObject, categoryObject)

console.log(inputsObject)
})
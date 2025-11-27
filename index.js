import { validateInput } from "./validateInput.js";

let form = document.querySelector("form");

// assume object is populated largest to smallest
let categoryObject = {
  Heavyweight : 750,
	LightHeavyweight : 100,
	Middleweight : 90,
	LightMiddleweight : 81,
	Lightweight : 73,
	Flyweight : 66
}

let plansObject = {
  Beginner : 1,
  Intermediate : 2,
  Elite : 3,
  SuperElite: 77
}


let categorySelect = document.querySelector("#categoryInput");



Object.keys(categoryObject).forEach(key => {
  categorySelect.options[categorySelect.options.length] = new Option(`${key.replace(/([a-z])([A-Z])/g, '$1 $2')}: <${categoryObject[key]}kg`, key);
})


let plansSelect = document.querySelector("#planInput");


Object.keys(plansObject).forEach(key => {
  plansSelect.options[plansSelect.options.length] = new Option(`${key.replace(/([a-z])([A-Z])/g, '$1 $2')}: £${plansObject[key]}`, key);
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

validateInput(inputsObject, categoryObject, plansObject)

console.log(inputsObject)
})
import { validateInput } from "./validateInput.js";
import {displayResults} from "./displayResults.js";
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

  /*   let name= document.getElementById("nameInput").value;
    let plan= document.getElementById("planInput").value;
    let weight= document.querySelector("#weightInput").value;
    let cat= document.querySelector("#categoryInput").value;
    let coaching= document.querySelector("#coachingInput").value;
    let competition= document.querySelector("#competitionInput").value */

  let inputsObject = {
     name : document.getElementById("nameInput").value,
     plan : document.getElementById("planInput").value,
     weight : document.getElementById("weightInput").value,
     cat : document.getElementById("categoryInput").value,
     coaching : document.getElementById("coachingInput").value,
     competition : document.getElementById("competitionInput").value 
  }

if (validateInput(inputsObject, categoryObject, plansObject) != false){
  displayResults()
}

console.log(inputsObject)
console.log(inputsObject.name.value)
})
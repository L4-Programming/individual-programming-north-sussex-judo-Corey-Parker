import { displayErrors } from "./displayErrors.js";
export function validateInput(inObj, catObj, plansObj){

/* 
      let inObj = {
    name: document.querySelector("#nameInput").value,
    plan: document.querySelector("#planInput").value,
    weight: document.querySelector("#weightInput").value,
    cat:document.querySelector("#categoryInput").value,
    coaching: document.querySelector("#coachingInput").value,
    competition: document.querySelector("#competitionInput").value
  } */

let errorObject = {}
function errorAppender(location, reason){

    if (!errorObject[location]){ errorObject[location] = {errormessage: []}; }

    errorObject[location].errormessage.push(reason);

}

//Basic Validation Checks
let maxStringLength= 50; let maxCoaching= 5; let maxComps = 2; 
let competitionPlans = ["Intermediate","Elite","SuperElite"]


if(inObj.name === "" || inObj.name.length > maxStringLength){errorAppender("nameInput", "Enter a valid name.")};
if(isNaN(inObj.weight) || inObj.weight < 1 || inObj.weight > Object.values(catObj)[0]){ errorAppender("weightInput", "Enter valid weight.")}
console.log(inObj.plan)
if(!(inObj.plan in plansObj) || inObj.plan === ""){errorAppender("planInput","Enter a valid plan")}
if(!(inObj.cat in catObj) || inObj.cat === ""){errorAppender("catInput","Enter a valid category")}
console.log(errorObject)
//NOTE: COACHING AND COMPETITION ARE OPTIONAL, Accepts non intiger values
if(isNaN(inObj.coaching) || inObj.coaching < 0){errorAppender("coachingInput","Enter a valid number of hours")}
if(inObj.coaching > maxCoaching){errorAppender("coachingInput",`You can only have up to ${maxCoaching} hours of coaching`)}

if(isNaN(inObj.competition) || inObj.competition < 0){errorAppender("competitionInput","Enter a valid number of competitions")}
else if(inObj.competition > maxComps){errorAppender("competitionInput",`There are only ${maxComps} competitions a month`)}
    //assumes a is gramatically correct
    else if(!(competitionPlans.includes(inObj.plan)) && inObj.competition != ""){errorAppender("competitionInput",`As a ${inObj.plan} you cannot compete in competitions`)}

  if (Object.keys(errorObject).length > 0) {
      console.log("There be errors here")
      displayErrors(errorObject)
    return false;
  }

}
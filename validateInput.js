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

//Presence & bound Checks
let maxStringLength= 50 
if(inObj.name === "" || inObj.name.length > maxStringLength){errorAppender("nameInput", "Enter a valid name.")};
if(isNaN(inObj.weight) || inObj.weight < 1 || inObj.weight > Object.values(catObj)[0]){ errorAppender("weightInput", "Enter valid weight.")}
if(inObj.plan === "" || !(Object.values(plansObj).includes(inObj.plan))){errorAppender("planInput","Enter a valid plan")}
//Member of set Checks

//Context Checks





}
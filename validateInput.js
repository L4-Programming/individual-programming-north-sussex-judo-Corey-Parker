export function validateInput(inputsObject, categoryObject, plansObject){

/* 
      let inputsObject = {
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
maxStringLength= 50 
if(inputsObject.name.length = "" || inputsObject.name.length > maxStringLength){errorAppender("nameInput", "Enter a valid name.")};
if(isNaN(inputsObject.weight) || inputsObject.weight < 1 || inputsObject.weight > Object.values(categoryObject)[0]){ errorAppender("weightInput", "Enter valid weight.")}

//Member of set Checks

//Context Checks





}
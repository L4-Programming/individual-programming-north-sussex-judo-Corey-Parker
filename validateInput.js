export function validateInput(inputObject, categoryObject){

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





}
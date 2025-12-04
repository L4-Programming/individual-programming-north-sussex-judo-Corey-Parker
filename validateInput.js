import { displayErrors } from "./displayErrors.js";
import { removeErrors } from "./displayErrors.js";
export function validateInput(inObj, catObj, plansObj){
    removeErrors()

let errorObject = {}
function errorAppender(location, reason){

    if (!errorObject[location]){ errorObject[location] = {errormessage: []}; }

    errorObject[location].errormessage.push(reason);

}
//First call to function per field will be added to object
//Basic Validation Checks 
let maxStringLength= 50; let maxCoaching= 5; let maxComps = 2; let minWeight = 45
let competitionPlans = ["Intermediate","Elite","SuperElite"]

//name
if(inObj.name === "" || inObj.name.length > maxStringLength){errorAppender("nameInput", "Enter a valid name.")};
//weight
if(isNaN(inObj.weight) ){ errorAppender("weightInput", "Enter valid weight.")}
   if( inObj.weight < minWeight ){ errorAppender("weightInput", `Weight must be greater than ${minWeight}Kg.`)}
    //first item in catObj will be the maximum weight allowed for the heaviest class
     if(inObj.weight > Object.values(catObj)[0] ){ errorAppender("weightInput", `Weight must be less than ${Object.values(catObj)[0]}Kg`)}
//plan
if(!(inObj.plan in plansObj) || inObj.plan === ""){errorAppender("planInput","Enter a valid plan")}
//category
if(!(inObj.cat in catObj) || inObj.cat === ""){errorAppender("catInput","Enter a valid category")}
//NOTE: COACHING AND COMPETITION ARE OPTIONAL
if(isNaN(inObj.coaching) || inObj.coaching < 0){errorAppender("coachingInput","Enter a valid number of hours")}
  if(inObj.coaching > maxCoaching){errorAppender("coachingInput",`You can only have up to ${maxCoaching} hours of coaching`)}
// Context validation for comps should only take place if no other errors for ease
if(isNaN(inObj.competition) || inObj.competition < 0){errorAppender("competitionInput","Enter a valid number of competitions")}
  else if(inObj.competition > maxComps){errorAppender("competitionInput",`There are only ${maxComps} competitions a month`)}
    //assumes "a" is gramatically correct
    else if(!(competitionPlans.includes(inObj.plan)) && inObj.competition != ""){errorAppender("competitionInput",`As a ${inObj.plan} you cannot compete in competitions`)}

if (Object.keys(errorObject).length > 0) {
      displayErrors(errorObject)
    return false;
  }
return inObj
}
function clearResults(){document.getElementById("output").innerHTML = ""}

export function displayResults(inObj,catObj, plansObj){

    /* 
      let inObj = {
    name: document.querySelector("#nameInput").value,
    plan: document.querySelector("#planInput").value,
    weight: document.querySelector("#weightInput").value,
    cat:document.querySelector("#categoryInput").value,
    coaching: document.querySelector("#coachingInput").value,
    competition: document.querySelector("#competitionInput").value
  } */
clearResults()

let coachingcost = 10; let competitioncost = 22;

let costObject = {
  session : plansObj[inObj.plan][1] * plansObj[inObj.plan][0] * 4,
  coaching : coachingcost * inObj.coaching,
  competition : competitioncost * inObj.competition,
}
costObject.sum = costObject.session + costObject.coaching + costObject.competition

console.log(costObject)


let htmlAdd = 
    `
          <div class="athlete-info">
        <h2>Athlete Information</h2>
      </div>
      
  <dl>
    <dd >${inObj.name}</dd>

    <dd >${inObj.plan}</dd>

    <dd> Category: ${inObj.cat} (<${catObj[inObj.cat]}) </dd>

    <dd >Current Weight: ${inObj.weight}</dd>
`
if(inObj.competition != ""){htmlAdd = htmlAdd + `<dd >Competitions: ${inObj.competition}</dd>`}
if(inObj.coaching != ""){htmlAdd = htmlAdd + `<dd >Coaching: ${inObj.coaching}</dd>`}
htmlAdd = htmlAdd + `</dl> `
document.getElementById("output").innerHTML = htmlAdd

htmlAdd =
 `
  <dl>
    <dd >Costs</dd>

    <dd>Sessions:  ${costObject.session}</dd>

    <dd> Coaching: ${costObject.coaching}  </dd>

    <dd >Competition: ${costObject.competition}</dd>
    
    <dd >Total for the month: ${costObject.sum}</dd>
`

}
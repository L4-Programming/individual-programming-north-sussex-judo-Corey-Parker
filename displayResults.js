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
  session : parseFloat(plansObj[inObj.plan][1] * plansObj[inObj.plan][0] * 4).toFixed(2),
  coaching : parseFloat(coachingcost * inObj.coaching).toFixed(2),
  competition : parseFloat(competitioncost * inObj.competition).toFixed(2)
}
costObject.sum = (parseFloat(costObject.session) + parseFloat(costObject.coaching) + parseFloat(costObject.competition)).toFixed(2)

console.log(costObject)

document.getElementById("outputswrapper").style.display = "flex";
document.getElementById("outputhr").style.display = "flex";
let htmlAdd = 
    `
          <div class="athlete-info">
        <h2>Athlete Information</h2>
      </div>
      

    <div class = "container">
    <div>Name:</div>
    <div>${inObj.name}</div>
    </div>

    <div class = "container">
    <div>Plan:</div>
    <div>${inObj.plan}</div>
    </div>

    <div class = "container">
    <div>Category:</div>
    <div> ${inObj.cat} (<${catObj[inObj.cat]}) </div>
    </div>

    <div class = "container">
    <div>Current Weight:</div>
    <div>${inObj.weight}</div>
    </div>
`

function htmlAdder(toAdd){htmlAdd = htmlAdd + toAdd}
let presentableCat = inObj.cat.replace(/([a-z])([A-Z])/g, '$1 $2')
if(inObj.weight>catObj[inObj.cat]){htmlAdder(`
  <div class = "container"><div> ${inObj.name} needs to lose ${inObj.weight-catObj[inObj.cat]}Kg to compete in ${presentableCat} </div></div>
  `)}
  else if(inObj.weight<catObj[inObj.cat]){htmlAdder(`<div class = "doublelinecontainer">  ${inObj.name} can to gain ${catObj[inObj.cat]-inObj.weight}Kg and still compete in ${presentableCat}</div>
    `)}
    else{htmlAdder(`
      <div class = "container"><div> ${inObj.name} is dead on weight for ${presentableCat} </div></div>
      `)}


if(inObj.competition != ""){htmlAdder(`
    <div class = "container">
    <div>Competitions:</div>
    <div>${inObj.competition}</div>
    </div>
  `)}

if(inObj.coaching != ""){htmlAdder(`
    <div class = "container">
    <div>Coaching:</div>
    <div>${inObj.coaching}</div>
    </div>
  `)}

document.getElementById("output").innerHTML = htmlAdd

let htmlCostAdd =
 `
  <dl>
      <div class="athlete-info">
        <h2>Costs</h2>
      </div>

    <div class = "container">
    <div>Sessions: </div>
    <div>£${costObject.session}</div>
    </div>

`

function htmlCostAdder(toAdd){htmlCostAdd = htmlCostAdd + toAdd}
if(inObj.coaching != ""){htmlCostAdder(
`
    <div class = "container">
    <div>Coaching:</div>
    <div>£${costObject.coaching} </div>
    </div>
`)};

if(inObj.competition != ""){htmlCostAdder(
`
    <div class = "container">
    <div>Competition:</div>
    <div>£${costObject.competition}</div>
    </div>
`)};

htmlAdd = htmlCostAdder(
`
    <div class = "container">
    <div>Total for the month:</div>
    <div>£${costObject.sum}</div>
    </div>

`);

document.getElementById("costs").innerHTML = htmlCostAdd

}
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
costObject.sum = parseFloat(costObject.session + costObject.coaching + costObject.competition).toFixed(2)

console.log(costObject)


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

if(inObj.weight>catObj[inObj.cat]){htmlAdder(`
  <div class = "container"><div> ${inObj.name} need to lose ${inObj.weight-catObj[inObj.cat]}Kg to compete in ${inObj.cat} </div></div>
  `)}
  else if(inObj.weight<catObj[inObj.cat]){htmlAdder(`<div class = "container"> <div> ${inObj.name} can to gain ${catObj[inObj.cat]-inObj.weight}Kg and still compete in ${inObj.cat} </div></div>
    `)}
    else{htmlAdder(`
      <div class = "container"><div> ${inObj.name} is are dead on weight for ${inObj.cat} </div></div>
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
htmlAdd =
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

if(inObj.coaching != ""){htmlAdder(
`
    <div class = "container">
    <div>Coaching:</div>
    <div>£${costObject.coaching} </div>
    </div>
`)};

if(inObj.competition != ""){htmlAdder(
`
    <div class = "container">
    <div>Competition:</div>
    <div>£${costObject.competition}</div>
    </div>
`)};

htmlAdd = htmlAdder(
`
    <div class = "container">
    <div>Total for the month:</div>
    <div>£${costObject.sum}</div>
    </div>

`);

document.getElementById("costs").innerHTML = htmlAdd

}
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

document.getElementById("output").innerHTML = 
    `
  <dl>
    <dd >${inObj.name}</dd>

    <dd >${inObj.plan}</dd>

    <dd > ${inObj.weight} </dd>

    <dd >${inObj.cat}</dd>

    <dd id = coachingresult> ${inObj.coaching}</dd>
    <dd id = competitionresult> ${inObj.competition}</dd>
    <script>
    
  if (inObj.coaching === ""){document.getElementById(coachingresult).style.display = "none"}
    else{document.getElementById(coachingresult).style.display = "block"}
  if (inObj.competition ===""){document.getElementById(competitionresult).style.display = "none"}
    else{document.getElementById(competitionresult).style.display = "block"}
    
    </script>
  </dl>
`


}
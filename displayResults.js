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
    console.log("displayResults")


    document.getElementById("output").innerHTML = 
    ""
}
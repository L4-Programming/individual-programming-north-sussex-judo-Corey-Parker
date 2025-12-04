function clearResults() {
  document.getElementById("output").innerHTML = "";
}

export function displayResults(inObj, catObj, plansObj) {
  clearResults();
  let coachingCost = 10;
  let competitionCost = 22;

  let costObject = {
    session: parseFloat(
      plansObj[inObj.plan][1] * plansObj[inObj.plan][0] * 4
    ).toFixed(2),
    coaching: parseFloat(coachingCost * inObj.coaching).toFixed(2),
    competition: parseFloat(competitionCost * inObj.competition).toFixed(2),
  };
  costObject.sum = (
    parseFloat(costObject.session) +
    parseFloat(costObject.coaching) +
    parseFloat(costObject.competition)
  ).toFixed(2);

  document.getElementById("outputhr").style.display = "flex";

  function basicDivAppend(string, label, value) {
    string += `
    <div class = "container">
    <div>${label}:</div>
    <div>${value}</div>
    </div>
    `;
    return string;
  }

  let htmlAdd = ` <div class="athlete-info"> <h2>Athlete Information</h2> </div> `;

  let appendArr = [
    ["Name", `${inObj.name}`],
    ["Plan", `${inObj.plan}`],
    ["Category", `${inObj.cat} (<${catObj[inObj.cat]}) `],
    ["Current Weight", `${inObj.weight}`],
  ];

  for (let i = 0; i < appendArr.length; i++) {
    htmlAdd = basicDivAppend(htmlAdd, appendArr[i][0], appendArr[i][1]);
  }

  let presentableCategory = inObj.cat.replace(/([a-z])([A-Z])/g, "$1 $2");
  let doubleLineText = "";
  if (inObj.weight > catObj[inObj.cat]) {
    doubleLineText = `${inObj.name} needs to lose ${
      inObj.weight - catObj[inObj.cat]
    }Kg to compete in ${presentableCategory}`;
  } else if (inObj.weight < catObj[inObj.cat]) {
    doubleLineText = `${inObj.name} can gain ${
      catObj[inObj.cat] - inObj.weight
    }Kg and still compete in ${presentableCategory}`;
  } else {
    doubleLineText = `${inObj.name} is dead on weight for ${presentableCategory}`;
  }
  htmlAdd += `<div class ="doublelinecontainer"><div> ${doubleLineText} </div></div>`;

  if (inObj.competition != "")
    htmlAdd = basicDivAppend(htmlAdd, "Competitions", `${inObj.competition}`);
  if (inObj.coaching != "")
    htmlAdd = basicDivAppend(htmlAdd, "Coaching", `${inObj.coaching}`);
  document.getElementById("output").innerHTML = htmlAdd;

  htmlAdd = `<div class="athlete-info"> <h2>Costs</h2> </div>
`;
  htmlAdd = basicDivAppend(htmlAdd, "Sessions", `£${costObject.session}`);
  if (inObj.coaching != "") {
    htmlAdd = basicDivAppend(htmlAdd, "Coaching", `£${costObject.coaching}`);
  }
  if (inObj.competition != "") {
    htmlAdd = basicDivAppend(
      htmlAdd,
      "Competition",
      `£${costObject.competition}`
    );
  }
  htmlAdd = basicDivAppend(
    htmlAdd,
    "Total for the month",
    `£${costObject.sum}`
  );

  document.getElementById("costs").innerHTML = htmlAdd;
}

export function displayErrors(errorObject){
    //adds css classes to elements with errors
      for (let where in errorObject) {
    let element = document.querySelector(`#${where}`);
    let labelOfElement = document.querySelector(`label[for=${where}]`);
    if (element) {
      element.classList.add("error-input");
    }
    if (labelOfElement) {
      labelOfElement.classList.add("error-label");
    }
  
    // Populate the error message div with an unordered list of error messages

    let errorDiv = document.querySelector(`#${where}error`);
    if (errorDiv) {
      errorDiv.classList.add("error-message");
      //adds list
      let ul = document.createElement("ul");

      // for each error in field of object creates and appends list element
      errorObject[where].reasons.forEach((why) => {
        let li = document.createElement("li");
        li.textContent = why;
        ul.appendChild(li);
      });

      errorDiv.innerHTML = ""; // Clear any existing content from previous submissions

      // adds the list to the div
      errorDiv.appendChild(ul);

}
}
}
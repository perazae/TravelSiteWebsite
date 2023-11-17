"use strict";
window.onload = () => {
  addingMountainsToDropdown();
};
function addingMountainsToDropdown() {
  const mountains = document.getElementById("mountain");
  mountainsArray.forEach(function (mountain) {
    //create mountain option for dropdown id
    let option = document.createElement("option");
    //set option value to the new element by ID
    option.value = mountain.name;
    option.textContent = mountain.name;

    mountains.appendChild(option);
  });
}

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", mountainTemplate);
function mountainTemplate() {
  const grabMountain = document.getElementById("mountain").value;
  const mountainName = mountainsArray.find(
    (title) => title.name == grabMountain
  );
  //adds mountain info to a card
  let message = `
  <div class="container text-center">
  <div class="card mx-auto">
    <div class="card-body">
      <img class="mountain-photo" src="images/${mountainName.img}">
      <h2 class="mountain-name">${mountainName.name} <span class="species">(${mountainName.elevation} feet)</span></h2>
      <h4 class="mountain-desc">${mountainName.desc} </h4>
      <p><strong>Effort:</strong> ${mountainName.effort}</p>
    </div>
  </div>
</div>
  `;
  //displays card in html page
  document.getElementById("mountains").innerHTML = message;
}


"use strict"

window.onload = () => {
    //
    const states = document.getElementById("states");
    const parktype = document.getElementById("parktype");
    addLocationsToDropdown();
    addNationalParksToDropdown();
};
//!Adds the states/territories and park types to the dropdown
function addLocationsToDropdown() {
    // Get the dropdown element by its ID

    // Use forEach to iterate over the array
    locationsArray.forEach(function (location) {
    // Create a new option element
    let option = document.createElement("option");

    // Set the value and text content for the new option
    option.value = location;
    option.textContent = location;

    // Add the new option to the dropdown
    states.appendChild(option);
    });
}

function addNationalParksToDropdown(){
        // Get the dropdown element by its ID

    // Use forEach to iterate over the array
    parkTypesArray.forEach(function (park) {
        // Create a new option element
        let option = document.createElement("option");
    
        // Set the value and text content for the new option
        option.value = park;
        option.textContent = park;
    
        // Add the new option to the dropdown
        parktype.appendChild(option);
        });
}
//TODO have the user pick a state once that happens all park types show up for that, then when user selects the specific park type then those show up
//cannot have user not select a state
//you have to nest functions and loops
//! Have it check if what the user state/territory selects = to the name in the nationParkData array
document.getElementById("displayBtn").addEventListener("click", displayInfo);
function displayInfo(){
    const states = document.getElementById("states");
    const selectedValue = states.value;
    // const parkType = document.getElementById("parktype")
    // const selectedTypeValue = parkType.value
    const printInfoOnWebsite = document.getElementById("myParks");
    //have the info show up in the website
    printInfoOnWebsite.innerHTML = "";
    //filter the parks based on the selected states
    const amountOfParks = document.getElementById("amountOfParks");
    amountOfParks.innerHTML = ""
    const SortParkByState = nationalParksArray.filter(park => park.State === selectedValue)
    if(SortParkByState.length > 0){
        SortParkByState.forEach(park => {
            printInfoOnWebsite.innerHTML +=
            `<div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><p>${park.LocationName}, ${park.City}, ${park.State}</p></h5>
                  <p class="card-text">${park.City}, ${park.State}</p>
                  <p class="card-text">${park.Fax}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>`;
        });
    } else {
        // letting user know there isn't any parks in location given
        alert("No park has been found in your selected location.");
    }

}
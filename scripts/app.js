"use strict"

window.onload = () => {
    //
    const states = document.getElementById("states");
    const parktype = document.getElementById("parktype");
    // addMountainsToDropdown();
    addLocationsToDropdown();
    addNationalParksToDropdown();
};

//!Adds the states/territories and park types to the dropdown
function addLocationsToDropdown() {

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

function addNationalParksToDropdown() {
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

//! Have it check if what the user state/territory selected = to the name in the nationParkData array
document.getElementById("displayBtn").addEventListener("click", displayInfo);
function displayInfo() {
    const states = document.getElementById("states");
    const selectedValue = states.value;
    //grab element from index
    const parkType = document.getElementById("parktype")
    // const selectedTypeValue = parkType.value
    const printInfoOnWebsite = document.getElementById("myParks");
    //have the info show up in the website
    printInfoOnWebsite.innerHTML = "";
    //filter the parks based on the selected states
    const SortParkByState = nationalParksArray.filter(park => park.State === selectedValue)
    //grab the value of what user inputs
    const selectedParkType = parkType.value
    const SortParkType = SortParkByState.filter(park => {
        if (selectedParkType === "All") {
            return park;
        } else if (park.LocationName.toLowerCase().includes(selectedParkType.toLowerCase())) {
            return park;
        }
    });
    if (SortParkType.length > 0) {
        SortParkType.forEach(park => {
            printInfoOnWebsite.innerHTML +=
                `
            
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"><p>${park.LocationName}, ${park.City}, ${park.State}</p></h5>
                  <p class="card-text">Phone Number:${park.Phone}, Fax: ${park.Fax}</p>
                  <p class="card-text">${park.Address}, ${park.ZipCode}</p>
                  <p class="card-text">${park.Latitude}, ${park.Longitude}</p>
                  <a href= ${park.Visit} class="btn btn-primary">Visit Website</a>
                </div>
                </div>
              `;
        });
    } else {
        // letting user know there isn't any parks in location given
        alert("Nothing has been found in your selection");
    }

}

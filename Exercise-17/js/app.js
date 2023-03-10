$(document).ready(function() {
    $("#contents").tabs();
    $("#solutions").accordion({
        heightStyle: "content"
    });
    $.getJSON("locations.json",(data)=>{
        console.log(data);
    })
    .done((data)=>displayLocations(data))
    .fail((error)=>console.log(error));
});

function displayLocations(locations) {
    const locationsDOM = $("#locations");
    const tableDOM = $("<table/>",{
        class: "location-container"
    });
    for(let location of locations)
        tableDOM.append(attachLocation(location));
    locationsDOM.append(tableDOM);
}

function attachLocation(location) {
    const locationDOM = $("<tr/>",{
        class: "location-content flex"
    });
    const flagContainerDOM = $("<td/>",{
        class: "flag-container"
    });
    const flagDOM = $("<img/>", {
        class: "flag",
        src: getFlag(location.country),
        alt: location.country
    });
    flagContainerDOM.append(flagDOM);

    const stateDOM = $("<td/>",{
        class: "state",
        text: location.state,
    });

    const cityDOM = $("<td/>",{
        class: "city",
        text: location.city,
    });

    const contactDOM = $("<td/>",{
        class: "contact-number",
        text: location.contact,
    });
    locationDOM.append(flagContainerDOM);
    locationDOM.append(stateDOM);
    locationDOM.append(cityDOM);
    locationDOM.append(contactDOM);

    return locationDOM;
}

function getFlag(countryName) {
    switch (countryName) {
        case "United States":
            return "assets/images/flags/usFlag.jpeg";
        case "India":
            return "assets/images/flags/indiaFlag.png";
        case "Canada":
            return "assets/images/flags/canadaFlag.png";
        default:
            return "assets/images/flags/whiteFlag.jpeg";
    }
}
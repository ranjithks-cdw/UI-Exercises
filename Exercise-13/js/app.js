import { friendsObject } from './friends.js'

const root = document.getElementById("main");

renderHeader();
renderMainContent();

function renderHeader() {
    // Header Tag
    let headerDOM = Object.assign(document.createElement("header"));

    // Header Wrapper
    let headerWrapperDOM = Object.assign(document.createElement("div"), {
        className: "flex header-wrapper"
    });

    // Title
    let titleDOM = Object.assign(document.createElement("h1"), {
        className: "title",
        textContent: "FRIENDS"
    });

    headerWrapperDOM.appendChild(titleDOM);
    headerDOM.appendChild(headerWrapperDOM);

    root.appendChild(headerDOM);
}

function renderMainContent() {
    // Main Tag
    let mainDOM = Object.assign(document.createElement("main"));

    // Container
    let containerDOM = Object.assign(document.createElement("div"),{
        className: "container"
    });

    // Card Wrapper
    let cardWrapperDOM = Object.assign(document.createElement("div"),{
        className: "flex card-wrapper"
    });

    for(let friend of friendsObject)
        cardWrapperDOM.appendChild(getCardDOM(friend));
    
    containerDOM.appendChild(cardWrapperDOM);
    mainDOM.appendChild(containerDOM);

    root.appendChild(mainDOM);
}

function getCardDOM(friend) {
    // Card
    let cardDOM = Object.assign(document.createElement("div"),{
        className: "flex card"
    });

    // Profile Image Container
    let profileImageContainerDOM = Object.assign(document.createElement("div"), {
        className: "profile-image"
    });

    // Image
    let imageDOM = Object.assign(document.createElement("img"), {
        alt: "profile",
        src: friend.img,
    });
    profileImageContainerDOM.appendChild(imageDOM);

    // Profile Details
    let profileDetailsDOM = Object.assign(document.createElement("div"), {
        className: "flex profile-details"
    });

    // Name
    let nameDOM = Object.assign(document.createElement("h6"), {
        className: "name",
        textContent: friend.first_name +" "+friend.last_name,
    });
    profileDetailsDOM.appendChild(nameDOM);

    // Email
    let emailDOM = Object.assign(document.createElement("p"), {
        className: "email",
        textContent: friend.email,
    });
    profileDetailsDOM.appendChild(emailDOM);

    cardDOM.appendChild(profileImageContainerDOM);
    cardDOM.appendChild(profileDetailsDOM);

    return cardDOM;
}
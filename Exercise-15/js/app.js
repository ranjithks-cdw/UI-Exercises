import { postersObj } from "./posters.js";
import { videoObj } from "./video.js";

(function() {
    renderUserAccount();
    renderMainContent();
    renderUpcomingProjectsContent();
})();

// User Account Render
function renderUserAccount() {
    const accountContainerDOM = document.getElementById("account-container");
    // Account Name
    const accountNameDOM = Object.assign(document.createElement("p"),{
        className: "account-name",
        textContent: "Steffy Jerry",
    });
    // Account Image
    const accountImageContainerDOM = Object.assign(document.createElement("div"), {
        className: "account-image-container"
    });
    const accountImageDOM = Object.assign(document.createElement("img"), {
        src: "assets/images/reviewers/andy.png",
        alt: "Andy",
        className: "account-image",
    });
    accountImageContainerDOM.appendChild(accountImageDOM);

    accountContainerDOM.appendChild(accountNameDOM);
    accountContainerDOM.appendChild(accountImageContainerDOM);
}

// Main Content
function renderMainContent() {
    const videoContainerDOM = document.getElementById("video-container");
    // Movie Trailer
    const movieTrailerDOM = Object.assign(document.createElement("video"),{
        className: "movie-trailer",
        id: "video",
        poster: "./assets/images/Thumbnail.png"
    });
    const movieSourceDOM = Object.assign(document.createElement("source"), {
        src: videoObj.videoUrl,
    });
    movieTrailerDOM.appendChild(movieSourceDOM);
    movieTrailerDOM.addEventListener("click",playPauseEvent);
    
    // Title
    const videoTitleDOM = Object.assign(document.createElement("h5"), {
        className: "video-title",
        textContent: videoObj.title,
    });
    // Description
    const videoDescriptionDOM = Object.assign(document.createElement("p"), {
        className: "video-description",
        textContent: videoObj.description,
    });
    videoContainerDOM.appendChild(movieTrailerDOM);
    videoContainerDOM.insertAdjacentElement("afterend",videoDescriptionDOM);
    videoContainerDOM.insertAdjacentElement("afterend",videoTitleDOM);

    // Comments
    const commentSectionDOM = document.getElementById("comment-section");
    for(let comment of videoObj.comments)
        commentSectionDOM.appendChild(renderCommentSection(comment));
}

// Comment Section
function renderCommentSection(comment) {
    const commentRowDOM = Object.assign(document.createElement("div"),{
        className: "comment-row",
    });
    // Profile Image
    const profileImageContainerDOM = Object.assign(document.createElement("div"), {
        className: "profile-image-container",
    });
    const profileImageDOM = Object.assign(document.createElement("img"),{
        src: comment.image,
        alt: comment.name,
    });
    profileImageContainerDOM.appendChild(profileImageDOM);

    // Comments
    const commentDetailsDOM = Object.assign(document.createElement("div"), {
        className: "comment-details",
    });
    const profileNameDOM = Object.assign(document.createElement("p"), {
        className: "profile-name",
        textContent: comment.name,
    });
    const commentDOM = Object.assign(document.createElement("p"), {
        className: "comment",
        textContent: comment.comment
    });
    commentDetailsDOM.appendChild(profileNameDOM);
    commentDetailsDOM.appendChild(commentDOM);

    commentRowDOM.appendChild(profileImageContainerDOM);
    commentRowDOM.appendChild(commentDetailsDOM);

    return commentRowDOM;
}

// Upcoming Projects
function renderUpcomingProjectsContent() {
    const upcomingProjectsContainerDOM = document.getElementById("upcoming-projects-container");
    const postersDOM = []
    for(let poster of postersObj) {
        const posterWrapperDOM = Object.assign(document.createElement("div"), {
            className: "poster-wrapper",
        });
        const posterDOM = Object.assign(document.createElement("img"), {
            src: poster.imageUrl,
            alt: poster.title,
            className: "poster"
        });
        posterWrapperDOM.appendChild(posterDOM);
        postersDOM.push(posterWrapperDOM);
    }
    for(let posters of postersDOM)
        upcomingProjectsContainerDOM.appendChild(posters);
    
}

function playPauseEvent() {
    const videDOM = document.getElementById("video");
    if(videDOM.paused)
        videDOM.play();
    else
        videDOM.pause();
}
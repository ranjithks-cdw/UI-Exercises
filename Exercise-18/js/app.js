$(document).ready(function() {
    renderUserAccount();
    $.getJSON("https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",(videoObj) => {
        console.log(videoObj);
    })
    .done((videoObj) => renderMainContent(videoObj))
    .fail((error) => console.log(error));
    $.getJSON("https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",(postersObj) => {
        console.log(postersObj);
    })
    .done((postersObj) => renderUpcomingProjectsContent(postersObj))
    .fail((error) => console.log(error));
});

// User Account Render
function renderUserAccount() {
    const accountContainerDOM = $("#account-container");
    // Account Name
    
    const accountNameDOM = $("<p/>").addClass('account-name').text("Steffy Jerry");
    // Account Image
    const accountImageContainerDOM = $("<div/>").addClass('account-image-container');
    const accountImageDOM = $("<img/>", {
        src:"images/reviewers/andy.png",
        alt: 'Andy',
        class: 'account-image'
    });
    accountImageContainerDOM.append(accountImageDOM);

    accountContainerDOM.append(accountNameDOM);
    accountContainerDOM.append(accountImageContainerDOM);
}

// Main Content
function renderMainContent(videoObj) {
    const videoContainerDOM = $("#video-container");
    // Movie Trailer
    const movieTrailerDOM = $("<video/>", {
        class: "movie-trailer",
        poster: "./images/Thumbnail.png",
    });
    const movieSourceDOM = $("<source/>", {
        src: videoObj.videoUrl,
    });
    movieTrailerDOM.append(movieSourceDOM);

    // Title
    const videoTitleDOM = $("<h5/>", {
        class: "video-title",
        text: videoObj.title,
    });
    // Description
    const videoDescriptionDOM = $("<p/>", {
        class: "video-description",
        text: videoObj.description,
    });
    videoContainerDOM.append(movieTrailerDOM);
    videoContainerDOM.after(videoDescriptionDOM);
    videoContainerDOM.after(videoTitleDOM);

    // Comments
    const commentSectionDOM = $("#comment-section");
    for(let comment of videoObj.comments)
        commentSectionDOM.append(renderCommentSection(comment));
}

// Comment Section
function renderCommentSection(comment) {
    const commentRowDOM = $("<div/>",{
        class: "comment-row",
    });
    // Profile Image
    const profileImageContainerDOM = $("<div/>", {
        class: "profile-image-container",
    });
    const profileImageDOM = $("<img/>",{
        src: comment.image,
        alt: comment.name,
    });
    profileImageContainerDOM.append(profileImageDOM);

    // Comments
    const commentDetailsDOM = $("<div/>", {
        class: "comment-details",
    });
    const profileNameDOM = $("<p/>", {
        class: "profile-name",
        text: comment.name,
    });
    const commentDOM = $("<p/>", {
        class: "comment",
        text: comment.comment
    });
    commentDetailsDOM.append(profileNameDOM);
    commentDetailsDOM.append(commentDOM);

    commentRowDOM.append(profileImageContainerDOM);
    commentRowDOM.append(commentDetailsDOM);

    return commentRowDOM;
}

// Upcoming Projects
function renderUpcomingProjectsContent(postersObj) {
    const upcomingProjectsContainerDOM = $("#upcoming-projects-container");
    const postersDOM = []
    for(let poster of postersObj) {
        const posterWrapperDOM = $("<div/>", {
            class: "poster-wrapper",
        });
        const posterDOM = $("<img/>", {
            src: poster.imageUrl,
            alt: poster.title,
            class: "poster"
        });
        posterWrapperDOM.append(posterDOM);
        postersDOM.push(posterWrapperDOM);
    }
    for(let posters of postersDOM)
        upcomingProjectsContainerDOM.append(posters);
    
}

// PROJECT SCROLL ANIMATION

const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

projects.forEach((project) => {
    observer.observe(project);
});

// OPEN CONTACT POPUP

function openContact() {
    document.getElementById("contactPopup")
        .classList.add("active");
}

// CLOSE CONTACT POPUP

function closeContact() {
    document.getElementById("contactPopup")
        .classList.remove("active");
}

// CLOSE WHEN CLICKING OUTSIDE

document.getElementById("contactPopup")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeContact();
        }

    });

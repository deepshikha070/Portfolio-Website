/* Typing Animation */
var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Web Designer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60, // Fixed case typo
    loop: true
});

// Select Elements
const nav = document.querySelector(".nav"),
    navList = nav ? nav.querySelectorAll("li") : [],
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length,
    navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

// Handle Navigation Clicks
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default page jump

        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

// Remove Back Section Class
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

// Add Back Section Class
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

// Show Active Section
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

// Update Navigation
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// Handle "Hire Me" Button Click
const hireMeBtn = document.querySelector(".hire-me");
if (hireMeBtn) {
    hireMeBtn.addEventListener("click", function () {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    });
}

// Toggle Navigation Menu
if (navTogglerBtn && aside) {
    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    });
}

// Function to Toggle Sidebar Navigation
function asideSectionTogglerBtn() {
    if (aside && navTogglerBtn) {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle("open");
        }
    }
}

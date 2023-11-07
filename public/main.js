// Parallax effect for foreground trees.
window.addEventListener("scroll", () => {
    let top = document.documentElement.scrollTop;
    let layerShadow = document.querySelector(".layer-shadow");
    let trees = document.querySelector(".layer-trees");
    layerShadow.style.opacity = top / 900;
    trees.style.transform = "translateY(-" + top  + "px)";
    console.log(top);
});

// Callback function on header click. Initiates fade in on intro elements.
function introClickCallback() {
    let header = document.querySelector("header");

    header.style.animationName = "fadeOut";
    header.style.animationDuration = "2s";
    header.style.animationFillMode = "forwards";

    setTimeout(() => {
        let main = document.querySelector("main");
        main.style.display = "block";
        main.style.animationName = "fadeIn";
        main.style.animationDuration = "3s";
        main.style.animationFillMode = "forwards";
    }, 2500);

    setTimeout(() => {
        let fact = document.querySelector(".fact-1");
        fact.style.display = "block";
        fact.style.animationName = "fadeIn";
        fact.style.animationDuration = "2s";
        fact.style.animationFillMode = "forwards";
    }, 4000)

    setTimeout(() => {
        let fact = document.querySelector(".fact-2");
        fact.style.display = "block";
        fact.style.animationName = "fadeIn";
        fact.style.animationDuration = "2s";
        fact.style.animationFillMode = "forwards";
    }, 6000)

    setTimeout(() => {
        let scrollGuide = document.querySelector(".scroll-guide");
        scrollGuide.style.animationName = "fadeIn";
        scrollGuide.style.animationDuration = "2s";
        scrollGuide.style.animationFillMode = "forwards";
    }, 9000)
};

let header = document.querySelector("header");
let loadAnalysis = false;
let mediaQuery = window.matchMedia("(min-width: 992px)");
let introPrompt = document.createElement("p");
introPrompt.classList.add("pad-title");

// Changes the text on intro screen depending on media query.
if (mediaQuery.matches) {
    introPrompt.textContent = "Click to Explore";
} else {
    introPrompt.textContent = "Touch to Explore";
}
header.querySelector(".header-content").appendChild(introPrompt);
mediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
        introPrompt.textContent = "Click to Explore";
    } else {
        introPrompt.textContent = "Touch to Explore";
    }   
});
header.addEventListener("click", introClickCallback, {once: true});

// window.addEventListener("scroll", () => {
//     //
//     if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
//         let analysis = document.querySelector("#analysis");
//         analysis.style.height = "auto";
//         let chart = document.querySelector("#observablehq-chart-7e50fd2e");
//         chart.style.display = "block";
//     }
// })
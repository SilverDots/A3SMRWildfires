// Parallax effect for foreground trees.
window.addEventListener("scroll", () => {
    let top = document.documentElement.scrollTop;
    let layerShadow = document.querySelector(".layer-shadow");
    let trees = document.querySelector(".layer-trees");
    layerShadow.style.opacity = top / 900;
    trees.style.transform = "translateY(-" + top  + "px)";
});

// Helper function which adds a fade in animation for a given element and duration.
function addFadeIn(element, duration) {
    element.style.display = "block";
    element.style.animationName = "fadeIn";
    element.style.animationDuration = duration + "s";
    element.style.animationFillMode = "forwards";
}

// Callback function on header click. Initiates fade in on intro elements.
function introClickCallback() {
    let header = document.querySelector("header");

    header.style.animationName = "fadeOut";
    header.style.animationDuration = "2s";
    header.style.animationFillMode = "forwards";

    setTimeout(() => {
        let main = document.querySelector("main");
        addFadeIn(main, 3);
    }, 2500);

    setTimeout(() => {
        let fact = document.querySelector(".fact-1");
        addFadeIn(fact, 2);
    }, 4000)

    setTimeout(() => {
        let fact = document.querySelector(".fact-2");
        addFadeIn(fact, 2);
    }, 6000)

    setTimeout(() => {
        let scrollGuide = document.querySelector(".scroll-guide");
        addFadeIn(scrollGuide, 2);
    }, 9000)
};

let header = document.querySelector("header");
let loadAnalysis = true;
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

window.addEventListener("scroll", () => {
    if (loadAnalysis) {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            let middle = document.querySelector(".middle");
            for (let i = 0; i < middle.children.length; i++) {
                setTimeout(() => {
                    let child = middle.children[i];
                    addFadeIn(child, 2);
                }, 1500 * i);
            }
            let analysis = document.querySelector("#analysis");
            let viz = document.querySelector(".viz");
            let writeUp = document.querySelector(".write-up");
            let footer = document.querySelector("footer");
            if (!window.matchMedia("(min-width: 1200px)").matches) {
                let map = document.querySelector(".map");
                let descrip = document.querySelector(".map-descrip");
                descrip.style.display = "none";
                map.style.display = "none";
            }
            setTimeout(() => {
                addFadeIn(viz, 2);
                addFadeIn(writeUp, 2);
                addFadeIn(footer, 2);
                analysis.style.height = "auto";
            }, (middle.children.length - 1) * 1500 + 500);
            loadAnalysis = false;
        }
    }
})
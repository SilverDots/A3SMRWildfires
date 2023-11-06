console.log("Add your visualizations here!");

window.addEventListener('scroll', () => {
    let mountains = document.getElementsByClassName("parallax-layer");
    let top = document.documentElement.scrollTop;
    // for (const elt of mountains) {
    //     // elt.style.opacity = 1 - top / 1920;
    // }

    let chicken = document.querySelector('.chicken');
    chicken.style.opacity = top / 1000;

    let front = document.querySelector('.layer-front');
    front.style.transform = 'translateY(-' + top  + "px)";
    console.log(front.style.transform);
})
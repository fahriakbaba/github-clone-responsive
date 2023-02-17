window.addEventListener("scroll", showStickyLeft);

function showStickyLeft() {
    if (window.scrollY > 300) {
        document.querySelector(".sticky-left").style.opacity = "1";
        document.querySelector(".sticky").style.gridTemplateRows="50px";
    }
    else {
        document.querySelector(".sticky-left").style.opacity = "0";
        document.querySelector(".sticky").style.gridTemplateRows="4.2rem";
    }
}
const hamburgerIcon = document.querySelector("#hamburger");
const nav = document.querySelector("nav");
const content = document.querySelector(".content");

window.addEventListener("scroll", showStickyLeft);

function showStickyLeft() {
    if (window.scrollY > 300) {
        document.querySelector(".sticky-left").style.opacity = "1";
        document.querySelector(".sticky").style.gridTemplateRows = "50px";
        nav.style.display = "none";
        content.style.marginTop = "0px"
    }
    else {
        document.querySelector(".sticky-left").style.opacity = "0";
        document.querySelector(".sticky").style.gridTemplateRows = "4.2rem";
    }
}

hamburgerIcon.addEventListener("click", toggleClick);

function toggleClick() {
    nav.style.display === "block" ? nav.style.display = "none" : nav.style.display = "block";
    content.style.marginTop === "185px" ? content.style.marginTop = "0px" : content.style.marginTop = "185px";
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 1199) {
        nav.style.display = "none";
        content.style.marginTop = "0px"
    }
})
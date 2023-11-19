const header=document.querySelector("header");

window.addEventListener("scroll," function(){
    header.classList.toggle("sticky" this.window.scrollY > 0);
})

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle('images/menu-alt-right-regular-24.png');
    navmenu.classList.toggle('open');
}
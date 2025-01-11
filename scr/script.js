let openMenu = document.querySelector (".header-mobile");
let menu = document.querySelector (".container-mobile-header");

openMenu.addEventListener ("click", fOpenMenu);

function fOpenMenu (){

    menu.classList.add ("active");
}

let closeMenu = document.querySelector (".button-mobile-header");

closeMenu.addEventListener ("click", fCloseMenu);

function fCloseMenu () {
    
    menu.classList.remove ("active");
}


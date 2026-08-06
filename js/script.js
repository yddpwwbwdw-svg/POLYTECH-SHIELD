document.addEventListener("DOMContentLoaded", function () {

    const boton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    boton.addEventListener("click", function () {
        menu.classList.toggle("activo");
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("activo");
        });
    });

});
//=============================
// MENU AL HACER SCROLL
//=============================

const header = document.querySelector(".header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 80){

        header.classList.add("scroll");

    }else{

        header.classList.remove("scroll");

    }

});
//=============================
// REVEAL
//=============================

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-120){

            section.classList.add("active");

        }

    });

});
/* =========================================================
   POLYTECH SHIELD
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENÚ MÓVIL
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {

        menuToggle.addEventListener("click", () => {

            menu.classList.toggle("activo");

            const abierto = menu.classList.contains("activo");

            menuToggle.setAttribute(
                "aria-expanded",
                abierto
            );

            menuToggle.textContent = abierto ? "✕" : "☰";

        });


        /* ================================================
           CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
        ================================================ */

        const enlacesMenu = menu.querySelectorAll("a");

        enlacesMenu.forEach((enlace) => {

            enlace.addEventListener("click", () => {

                menu.classList.remove("activo");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            });

        });


        /* ================================================
           CERRAR MENÚ SI CAMBIAMOS A ESCRITORIO
        ================================================ */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

                menu.classList.remove("activo");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            }

        });

    }


    /* =====================================================
       ANIMACIÓN REVEAL
    ===================================================== */

    const elementosReveal = document.querySelectorAll(".reveal");

    if (elementosReveal.length > 0) {

        const observer = new IntersectionObserver(

            (entradas, observer) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("visible");

                        observer.unobserve(
                            entrada.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


        elementosReveal.forEach((elemento) => {

            observer.observe(elemento);

        });

    }


    /* =====================================================
       CERRAR MENÚ AL HACER CLICK FUERA
    ===================================================== */

    document.addEventListener("click", (evento) => {

        if (!menuToggle || !menu) {
            return;
        }

        const clickDentroDelMenu =
            menu.contains(evento.target);

        const clickEnBoton =
            menuToggle.contains(evento.target);


        if (
            window.innerWidth <= 768 &&
            menu.classList.contains("activo") &&
            !clickDentroDelMenu &&
            !clickEnBoton
        ) {

            menu.classList.remove("activo");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        }

    });

});
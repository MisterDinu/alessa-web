// BOTONES FLOTANTES — aparecen después de bajar 100px

document.addEventListener('DOMContentLoaded', function () {
    var botonArriba = document.getElementById('btnArriba');
    var botonWa = document.getElementById('btnSeguimiento');
    var botonPsic = document.getElementById('btnPsic');

    function mostrarBotones() {
        var mostrar =
            window.scrollY > 100 ||
            document.documentElement.scrollTop > 100;

        if (botonArriba) {
            botonArriba.classList.toggle('btn-visible', mostrar);
        }

        if (botonWa) {
            botonWa.classList.toggle('btn-visible', mostrar);
        }

        if (botonPsic) {
            botonPsic.classList.toggle('btn-visible', mostrar);
        }
    }

    window.addEventListener('scroll', mostrarBotones, {
        passive: true
    });

    // Establece correctamente el estado al cargar o recargar.
    mostrarBotones();
});


// FUNCIÓN PARA VOLVER ARRIBA

function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// PARA MOSTRAR Y CERRAR CARD PASOS

function mostrarModal(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = 'flex';
  }
  
  function cerrarModal(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = 'none';
  }


// FOR THE NS PASOS SECTION, TEXT BOX APPEARS WHEN SCROLLING

document.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.querySelectorAll('.paso');
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 200;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


// PARA ERROR DE TARGET BLANK EN BOTÓN DE WHATSAPP

function agendarSesion() {
    var url = "https://wa.me/525636140438?text=¡Hola!%20Me%20gustaría%20agendar%20una%20sesión";
    gtag_report_conversion(url);
    window.open(url, "_blank");
}


// PARA TESTIMONIOS

document.addEventListener("DOMContentLoaded", () => {
    const carrete = document.querySelector(".carrete");

    if (carrete) {
        let isDragging = false;
        let startX;
        let scrollLeft;

        const startDragging = (e) => {
            isDragging = true;
            startX = (e.pageX || e.touches[0].pageX) - carrete.offsetLeft;
            scrollLeft = carrete.scrollLeft;
        };

        const stopDragging = () => {
            isDragging = false;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = (e.pageX || e.touches[0].pageX) - carrete.offsetLeft;
            const walk = (x - startX) * 2; // La cantidad de desplazamiento
            carrete.scrollLeft = scrollLeft - walk;
        };

        carrete.addEventListener("mousedown", startDragging);
        carrete.addEventListener("mouseleave", stopDragging);
        carrete.addEventListener("mouseup", stopDragging);
        carrete.addEventListener("mousemove", dragging);


        carrete.addEventListener("touchstart", (e) => {
            startDragging(e);
        });
        carrete.addEventListener("touchend", (e) => {
            stopDragging(e);
        });
        carrete.addEventListener("touchmove", (e) => {
            dragging(e);
        });

    } else {
        console.error("No se encontró el elemento .carrete");
    }
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");

    // Define la cantidad de desplazamiento en píxeles
    const scrollAmount = 79;

    // Función para desplazar hacia la izquierda
    scrollLeftBtn.addEventListener("click", () => {
        carrete.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Función para desplazar hacia la derecha
    scrollRightBtn.addEventListener("click", () => {
        carrete.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

});
// NAV — toggle mobile + dropdown
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger
    const toggle = document.getElementById('nav-toggle');
    const menu   = document.getElementById('nav-menu');
    const nav    = document.querySelector('.nav');

    if (toggle && menu) {
        const updateIcon = (isOpen) => {
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !isOpen);
                icon.classList.toggle('fa-times', isOpen);
            }
        };

        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('nav__menu--open');
            document.body.classList.toggle('body--nav-open', isOpen);
            nav.classList.toggle('nav--menu-open', isOpen);
            toggle.setAttribute('aria-expanded', isOpen);
            updateIcon(isOpen);
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('nav__menu--open');
                document.body.classList.remove('body--nav-open');
                nav.classList.remove('nav--menu-open');
                toggle.setAttribute('aria-expanded', false);
                updateIcon(false);
            });
        });
    }

    // Dropdown toggle en mobile (tap en "Servicios")
    const dropdownToggle = document.querySelector('.nav__dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', () => {
            const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
            dropdownToggle.setAttribute('aria-expanded', !expanded);
        });
    }
});